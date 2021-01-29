import React, { forwardRef } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { TextInputField } from "../components";

const initialState = {
  name: "",
  description: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
});

const styles = {
  input: {
    border: "none",
    backgroundColor: "#ddd",
    padding: 8,
    fontSize: 18,
  },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

const TodoForm = forwardRef(function (
  { initialValues = initialState, onSubmit, submitButtonText },
  ref
) {
  return (
    <Formik
      innerRef={ref}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <TextInputField name="name" placeholder="Name" style={styles.input} />
        <TextInputField
          name="description"
          placeholder="Description"
          style={styles.input}
        />
        <button style={styles.button} type="submit">
          {submitButtonText}
        </button>
      </Form>
    </Formik>
  );
});

export default TodoForm;
