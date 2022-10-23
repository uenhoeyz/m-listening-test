/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResults = /* GraphQL */ `
  mutation CreateResults(
    $input: CreateResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    createResults(input: $input, condition: $condition) {
      id
      user
      test
      model
      file
      result
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateResults = /* GraphQL */ `
  mutation UpdateResults(
    $input: UpdateResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    updateResults(input: $input, condition: $condition) {
      id
      user
      test
      model
      file
      result
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteResults = /* GraphQL */ `
  mutation DeleteResults(
    $input: DeleteResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    deleteResults(input: $input, condition: $condition) {
      id
      user
      test
      model
      file
      result
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
