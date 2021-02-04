import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button } from "antd";
import { TextInputField } from "../components";

const initialValues = { username: "", password: "" };

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required()
});

const LoginForm = function({ onSubmit }) {
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
        <Button htmlType="submit" type="primary">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
