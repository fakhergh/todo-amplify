import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextInputField } from "../components";

const initialValues = {
  code: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  code: Yup.string().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matches")
    .required(),
});

const ResetPasswordForm = function ({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <TextInputField name="code" placeholder="Code" />
        <TextInputField
          name="password"
          type="password"
          placeholder="New Password"
        />
        <TextInputField
          name="confirmPassword"
          type="password"
          placeholder="Confirm New Password"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ResetPasswordForm;
