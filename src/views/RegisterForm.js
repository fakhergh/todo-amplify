import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { TextInputField } from "../components";
import { Button } from "antd";

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: ""
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password not matches")
    .required(),
  phoneNumber: Yup.string().required()
});

const RegisterForm = function({ onSubmit }) {
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
        <TextInputField
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <TextInputField name="phoneNumber" placeholder="Phone Number" />
        <Button htmlType="submit" type="primary">
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
