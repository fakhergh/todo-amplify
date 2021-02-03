import React, { useCallback, useRef } from "react";
import { Auth } from "aws-amplify";

import { TodoForm, TodoList } from "../views";
import { useCreateTodo, useDeleteTodo, useTodos } from "../hooks";

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
};

const Todo = function ({ history }) {
  const formikRef = useRef(null);

  const { status, data, error } = useTodos();

  const { mutate: addTodoMutation } = useCreateTodo();

  const { mutate: removeTodoMutation } = useDeleteTodo();

  const onSubmit = useCallback(
    (values) => {
      addTodoMutation({ variables: { input: values } });
      formikRef.current.resetForm();
    },
    [formikRef, addTodoMutation]
  );

  const onItemDeleteClicked = useCallback(
    (id) => {
      removeTodoMutation({ variables: { input: { id } } });
    },
    [removeTodoMutation]
  );

  if (!!error) {
    return <p>Error</p>;
  }

  if (status === "loading") {
    return <p>Loading</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <button
        onClick={() => {
          Auth.signOut()
            .then(() => {
              history.push("/auth");
            })
            .catch(console.log);
        }}
      >
        Sign out
      </button>
      <TodoForm
        ref={formikRef}
        onSubmit={onSubmit}
        submitButtonText="Create Todo"
      />
      <TodoList
        items={data.data?.listTodos.items || []}
        onItemDeleteClicked={onItemDeleteClicked}
      />
    </div>
  );
};

export default Todo;
