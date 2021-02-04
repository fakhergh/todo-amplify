import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextInputField } from "../components";
import { Button } from "antd";

const initialValues = { username: "" };

const validationSchema = Yup.object().shape({
  username: Yup.string().required()
});

const ForgotPasswordForm = function({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <TextInputField name="username" placeholder="Username" />
        <Button htmlType="submit" type="primary">
          Send
        </Button>
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;
