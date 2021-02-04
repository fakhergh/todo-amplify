import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { TextInputField } from "../components";

const initialValues = { username: "", password: "" };

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginForm = function ({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <TextInputField name="username" placeholder="Username" />
        <TextInputField
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
