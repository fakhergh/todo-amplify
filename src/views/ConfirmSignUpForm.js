import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextInputField } from "../components";

const initialValues = {
  code: "",
};

const validationSchema = Yup.object().shape({
  code: Yup.string().required(),
});

const ConfirmSignUpForm = function ({ username, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <p>Username: {username}</p>
        <TextInputField name="code" placeholder="Verification Code" />
        <button type="submit">Confirm</button>
      </Form>
    </Formik>
  );
};

export default ConfirmSignUpForm;
