/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createDesignation = /* GraphQL */ `
  mutation CreateDesignation(
    $input: CreateDesignationInput!
    $condition: ModelDesignationConditionInput
  ) {
    createDesignation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateDesignation = /* GraphQL */ `
  mutation UpdateDesignation(
    $input: UpdateDesignationInput!
    $condition: ModelDesignationConditionInput
  ) {
    updateDesignation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteDesignation = /* GraphQL */ `
  mutation DeleteDesignation(
    $input: DeleteDesignationInput!
    $condition: ModelDesignationConditionInput
  ) {
    deleteDesignation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
