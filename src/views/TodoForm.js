import React, { forwardRef } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { TextInputField } from "../components";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const initialState = {
  name: "",
  description: ""
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required()
});

const TodoForm = forwardRef(function(
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
        <TextInputField name="name" placeholder="Name" />
        <TextInputField name="description" placeholder="Description" />
        <Button htmlType="submit" type="primary" icon={<PlusOutlined />}>
          {submitButtonText}
        </Button>
      </Form>
    </Formik>
  );
});

export default TodoForm;
