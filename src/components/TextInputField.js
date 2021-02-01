import React from "react";
import { useField } from "formik";
import { Input } from "antd";
import FieldErrorMessage from "./FieldErrorMessage";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 10
  }
};

const TextInputField = function({ name, ...props }) {
  const [{ value, onChange, onBlur }] = useField(name);

  return (
    <div style={styles.container}>
      <Input
        {...props}
        value={value}
        onChange={onChange(name)}
        onBlur={onBlur(name)}
      />
      <FieldErrorMessage name={name} />
    </div>
  );
};

export default TextInputField;
