/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      designation {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        designation {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDesignation = /* GraphQL */ `
  query GetDesignation($id: ID!) {
    getDesignation(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listDesignations = /* GraphQL */ `
  query ListDesignations(
    $filter: ModelDesignationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDesignations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
