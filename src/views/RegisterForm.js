import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { TextInputField } from "../components";

const initialValues = {
  username: "",
  email: "",
  password: "",
  phoneNumber: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  phoneNumber: Yup.string().required(),
});

const RegisterForm = function ({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <TextInputField name="username" placeholder="Username" />
        <TextInputField name="email" placeholder="Email" />
        <TextInputField
          name="password"
          type="password"
          placeholder="Password"
        />
        <TextInputField name="phoneNumber" placeholder="Phone Number" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
