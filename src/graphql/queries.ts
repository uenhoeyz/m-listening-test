/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResults = /* GraphQL */ `
  query GetResults($id: ID!) {
    getResults(id: $id) {
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
export const listResults = /* GraphQL */ `
  query ListResults(
    $filter: ModelResultsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncResults = /* GraphQL */ `
  query SyncResults(
    $filter: ModelResultsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
