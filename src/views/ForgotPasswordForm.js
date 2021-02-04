import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextInputField } from "../components";

const initialValues = { username: "" };

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
});

const ForgotPasswordForm = function ({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <TextInputField name="username" placeholder="Username" />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;
