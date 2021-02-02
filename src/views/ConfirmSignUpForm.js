import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextInputField } from "../components";
import { Button, Typography } from "antd";

const initialValues = {
  code: ""
};

const validationSchema = Yup.object().shape({
  code: Yup.string().required()
});

const ConfirmSignUpForm = function({ username, onSubmit }) {
  const { Paragraph } = Typography;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Paragraph>Username: {username}</Paragraph>
        <TextInputField name="code" placeholder="Verification Code" />
        <Button htmlType="submit">Confirm</Button>
      </Form>
    </Formik>
  );
};

export default ConfirmSignUpForm;
