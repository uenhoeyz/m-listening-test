/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResults = /* GraphQL */ `
  subscription OnCreateResults($filter: ModelSubscriptionResultsFilterInput) {
    onCreateResults(filter: $filter) {
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
export const onUpdateResults = /* GraphQL */ `
  subscription OnUpdateResults($filter: ModelSubscriptionResultsFilterInput) {
    onUpdateResults(filter: $filter) {
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
export const onDeleteResults = /* GraphQL */ `
  subscription OnDeleteResults($filter: ModelSubscriptionResultsFilterInput) {
    onDeleteResults(filter: $filter) {
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
