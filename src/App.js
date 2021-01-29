import React, { useCallback, useRef } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { createTodo, deleteTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import graphqlClient from "./graphqlClient";
import { TodoForm, TodoList } from "./views";

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

const App = function () {
  const formikRef = useRef(null);
  const queryClient = useQueryClient();

  const { status, data, error } = useQuery("todos", () =>
    graphqlClient.request(listTodos)
  );

  const { mutate: addTodoMutation } = useMutation(
    async ({ variables }) => graphqlClient.request(createTodo, variables),
    {
      onSuccess: (data) => {
        queryClient.setQueryData("todos", (old) => {
          const newData = JSON.parse(JSON.stringify(old));
          newData.listTodos.items.unshift(data.createTodo);
          return newData;
        });
      },
    }
  );

  const { mutate: removeTodoMutation } = useMutation(
    async ({ variables }) => graphqlClient.request(deleteTodo, variables),
    {
      onSuccess: (data) => {
        queryClient.setQueryData("todos", (old) => {
          const newData = JSON.parse(JSON.stringify(old));

          newData.listTodos.items = newData.listTodos.items.filter(
            (todo) => todo.id != data.deleteTodo.id
          );
          return newData;
        });
      },
    }
  );

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
      <TodoForm
        ref={formikRef}
        onSubmit={onSubmit}
        submitButtonText="Create Todo"
      />
      <TodoList
        items={data?.listTodos.items || []}
        onItemDeleteClicked={onItemDeleteClicked}
      />
    </div>
  );
};

export default withAuthenticator(App);
