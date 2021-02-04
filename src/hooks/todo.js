import { useQuery, useMutation, useQueryClient } from "react-query";
import gql from "graphql-tag";

import client from "../client";
import { listTodos } from "../graphql/queries";
import { createTodo, deleteTodo } from "../graphql/mutations";

export const useTodos = () =>
  useQuery("todos", () =>
    client.query({
      query: gql`
        ${listTodos}
      `,
    })
  );

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ variables }) =>
      client.mutate({
        mutation: gql`
          ${createTodo}
        `,
        variables,
      }),
    {
      onSuccess: ({ data }) => {
        queryClient.setQueryData("todos", (old) => {
          const newData = JSON.parse(JSON.stringify(old));

          newData.data.listTodos.items.unshift(data.createTodo);
          return newData;
        });
      },
    }
  );
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ variables }) =>
      client.mutate({
        mutation: gql`
          ${deleteTodo}
        `,
        variables,
      }),
    {
      onSuccess: ({ data }) => {
        queryClient.setQueryData("todos", (old) => {
          const newData = JSON.parse(JSON.stringify(old));

          newData.data.listTodos.items = newData.data.listTodos.items.filter(
            (todo) => todo.id !== data.deleteTodo.id
          );
          return newData;
        });
      },
    }
  );
};
