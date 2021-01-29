import React from "react";
import { ErrorMessage } from "formik";

const styles = {
  errorMessage: {
    color: "red",
  },
};

const FieldErrorMessage = function ({ name }) {
  return (
    <ErrorMessage name={name}>
      {(message) => <span style={styles.errorMessage}>{message}</span>}
    </ErrorMessage>
  );
};

export default FieldErrorMessage;
