import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type ResultsMetaData = {
  readOnlyFields: 'updatedAt';
}

type EagerResults = {
  readonly id: string;
  readonly user: string;
  readonly test: string;
  readonly model: string;
  readonly file: string;
  readonly result: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyResults = {
  readonly id: string;
  readonly user: string;
  readonly test: string;
  readonly model: string;
  readonly file: string;
  readonly result: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type Results = LazyLoading extends LazyLoadingDisabled ? EagerResults : LazyResults

export declare const Results: (new (init: ModelInit<Results, ResultsMetaData>) => Results) & {
  copyOf(source: Results, mutator: (draft: MutableModel<Results, ResultsMetaData>) => MutableModel<Results, ResultsMetaData> | void): Results;
}