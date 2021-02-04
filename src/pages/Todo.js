import React, { useCallback, useRef } from "react";
import { Auth } from "aws-amplify";
import { Button, Layout } from "antd";

import { TodoForm, TodoList } from "../views";
import { useCreateTodo, useDeleteTodo, useTodos } from "../hooks";

const Todo = function({ history }) {
  const formikRef = useRef(null);

  const { status, data, error } = useTodos();

  const { mutate: addTodoMutation } = useCreateTodo();

  const { mutate: removeTodoMutation } = useDeleteTodo();

  const onSubmit = useCallback(
    values => {
      addTodoMutation({ variables: { input: values } });
      formikRef.current.resetForm();
    },
    [formikRef, addTodoMutation]
  );

  const onItemDeleteClicked = useCallback(
    id => {
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

  const { Header, Footer, Content } = Layout;

  return (
    <Layout style={{ padding: 30 }}>
      <Header style={{ backgroundColor: "white" }}>Amplify Todos</Header>
      <Content>
        <TodoForm ref={formikRef} onSubmit={onSubmit} submitButtonText="Todo" />
        <TodoList
          items={data.data?.listTodos.items || []}
          onItemDeleteClicked={onItemDeleteClicked}
        />
      </Content>
      <Footer>
        <Button
          onClick={() => {
            Auth.signOut()
              .then(() => {
                history.push("/auth");
              })
              .catch(console.log);
          }}
        >
          Sign out
        </Button>
      </Footer>
    </Layout>
  );
};

export default Todo;
