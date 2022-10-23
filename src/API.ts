/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateResultsInput = {
  id?: string | null,
  user: string,
  test: string,
  model: string,
  file: string,
  result: string,
  createdAt?: string | null,
  _version?: number | null,
};

export type ModelResultsConditionInput = {
  user?: ModelStringInput | null,
  test?: ModelStringInput | null,
  model?: ModelStringInput | null,
  file?: ModelStringInput | null,
  result?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelResultsConditionInput | null > | null,
  or?: Array< ModelResultsConditionInput | null > | null,
  not?: ModelResultsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Results = {
  __typename: "Results",
  id: string,
  user: string,
  test: string,
  model: string,
  file: string,
  result: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateResultsInput = {
  id: string,
  user?: string | null,
  test?: string | null,
  model?: string | null,
  file?: string | null,
  result?: string | null,
  createdAt?: string | null,
  _version?: number | null,
};

export type DeleteResultsInput = {
  id: string,
  _version?: number | null,
};

export type ModelResultsFilterInput = {
  id?: ModelIDInput | null,
  user?: ModelStringInput | null,
  test?: ModelStringInput | null,
  model?: ModelStringInput | null,
  file?: ModelStringInput | null,
  result?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelResultsFilterInput | null > | null,
  or?: Array< ModelResultsFilterInput | null > | null,
  not?: ModelResultsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelResultsConnection = {
  __typename: "ModelResultsConnection",
  items:  Array<Results | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionResultsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user?: ModelSubscriptionStringInput | null,
  test?: ModelSubscriptionStringInput | null,
  model?: ModelSubscriptionStringInput | null,
  file?: ModelSubscriptionStringInput | null,
  result?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionResultsFilterInput | null > | null,
  or?: Array< ModelSubscriptionResultsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateResultsMutationVariables = {
  input: CreateResultsInput,
  condition?: ModelResultsConditionInput | null,
};

export type CreateResultsMutation = {
  createResults?:  {
    __typename: "Results",
    id: string,
    user: string,
    test: string,
    model: string,
    file: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateResultsMutationVariables = {
  input: UpdateResultsInput,
  condition?: ModelResultsConditionInput | null,
};

export type UpdateResultsMutation = {
  updateResults?:  {
    __typename: "Results",
    id: string,
    user: string,
    test: string,
    model: string,
    file: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteResultsMutationVariables = {
  input: DeleteResultsInput,
  condition?: ModelResultsConditionInput | null,
};

export type DeleteResultsMutation = {
  deleteResults?:  {
    __typename: "Results",
    id: string,
    user: string,
    test: string,
    model: string,
    file: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetResultsQueryVariables = {
  id: string,
};

export type GetResultsQuery = {
  getResults?:  {
    __typename: "Results",
    id: string,
    user: string,
    test: string,
    model: string,
    file: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListResultsQueryVariables = {
  filter?: ModelResultsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListResultsQuery = {
  listResults?:  {
    __typename: "ModelResultsConnection",
    items:  Array< {
      __typename: "Results",
      id: string,
      user: string,
      test: string,
      model: string,
      file: string,
      result: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncResultsQueryVariables = {
  filter?: ModelResultsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncResultsQuery = {
  syncResults?:  {
    __typename: "ModelResultsConnection",
    items:  Array< {
      __typename: "Results",
      id: string,
      user: string,
      test: string,
      model: string,
      file: string,
      result: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateResultsSubscriptionVariables = {
  filter?: ModelSubscriptionResultsFilterInput | null,
};

export type OnCreateResultsSubscription = {
  onCreateResults?:  {
    __typename: "Results",
    id: string,
    user: string,
    test: string,
    model: string,
    file: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateResultsSubscriptionVariables = {
  filter?: ModelSubscriptionResultsFilterInput | null,
};

export type OnUpdateResultsSubscription = {
  onUpdateResults?:  {
    __typename: "Results",
    id: string,
    user: string,
    test: string,
    model: string,
    file: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteResultsSubscriptionVariables = {
  filter?: ModelSubscriptionResultsFilterInput | null,
};

export type OnDeleteResultsSubscription = {
  onDeleteResults?:  {
    __typename: "Results",
    id: string,
    user: string,
    test: string,
    model: string,
    file: string,
    result: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
