/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Card = {
  __typename?: 'Card';
  id?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  favouriteCard?: Maybe<Array<Maybe<Card>>>;
  unfavouriteCard?: Maybe<Array<Maybe<Card>>>;
};


export type MutationFavouriteCardArgs = {
  cardId: Scalars['Int']['input'];
};


export type MutationUnfavouriteCardArgs = {
  cardId: Scalars['Int']['input'];
};

export type PaginatedCard = {
  __typename?: 'PaginatedCard';
  paginatedData?: Maybe<Array<Maybe<Card>>>;
  paginatedTotal?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAllCards?: Maybe<PaginatedCard>;
  getMyCards?: Maybe<PaginatedCard>;
};


export type QueryGetAllCardsArgs = {
  pageNo: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};


export type QueryGetMyCardsArgs = {
  pageNo: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
};

export type FavouriteCardMutationVariables = Exact<{
  cardId: Scalars['Int']['input'];
}>;


export type FavouriteCardMutation = { __typename?: 'Mutation', favouriteCard?: Array<{ __typename?: 'Card', id?: number | null, value?: number | null } | null> | null };

export type UnfavouriteCardMutationVariables = Exact<{
  cardId: Scalars['Int']['input'];
}>;


export type UnfavouriteCardMutation = { __typename?: 'Mutation', unfavouriteCard?: Array<{ __typename?: 'Card', id?: number | null, value?: number | null } | null> | null };

export type GetAllCardsQueryVariables = Exact<{
  pageNo: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
}>;


export type GetAllCardsQuery = { __typename?: 'Query', getAllCards?: { __typename?: 'PaginatedCard', paginatedTotal?: number | null, paginatedData?: Array<{ __typename?: 'Card', id?: number | null, value?: number | null } | null> | null } | null };

export type GetMyCardsQueryVariables = Exact<{
  pageNo: Scalars['Int']['input'];
  perPage: Scalars['Int']['input'];
}>;


export type GetMyCardsQuery = { __typename?: 'Query', getMyCards?: { __typename?: 'PaginatedCard', paginatedTotal?: number | null, paginatedData?: Array<{ __typename?: 'Card', id?: number | null, value?: number | null } | null> | null } | null };


export const FavouriteCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FavouriteCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favouriteCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cardId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<FavouriteCardMutation, FavouriteCardMutationVariables>;
export const UnfavouriteCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnfavouriteCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unfavouriteCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cardId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UnfavouriteCardMutation, UnfavouriteCardMutationVariables>;
export const GetAllCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNo"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatedTotal"}}]}}]}}]} as unknown as DocumentNode<GetAllCardsQuery, GetAllCardsQueryVariables>;
export const GetMyCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyCards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageNo"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyCards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageNo"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageNo"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatedTotal"}}]}}]}}]} as unknown as DocumentNode<GetMyCardsQuery, GetMyCardsQueryVariables>;