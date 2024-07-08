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

export type Query = {
  __typename?: 'Query';
  getCards?: Maybe<Array<Maybe<Card>>>;
  getMyCards?: Maybe<Array<Maybe<Card>>>;
};

export type FavouriteCardMutationVariables = Exact<{
  cardId: Scalars['Int']['input'];
}>;


export type FavouriteCardMutation = { __typename?: 'Mutation', favouriteCard?: Array<{ __typename?: 'Card', id?: number | null, value?: number | null } | null> | null };

export type UnfavouriteCardMutationVariables = Exact<{
  cardId: Scalars['Int']['input'];
}>;


export type UnfavouriteCardMutation = { __typename?: 'Mutation', unfavouriteCard?: Array<{ __typename?: 'Card', id?: number | null, value?: number | null } | null> | null };

export type GetCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCardsQuery = { __typename?: 'Query', getCards?: Array<{ __typename?: 'Card', id?: number | null, value?: number | null } | null> | null };

export type GetMyCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyCardsQuery = { __typename?: 'Query', getMyCards?: Array<{ __typename?: 'Card', id?: number | null, value?: number | null } | null> | null };


export const FavouriteCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FavouriteCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favouriteCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cardId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<FavouriteCardMutation, FavouriteCardMutationVariables>;
export const UnfavouriteCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnfavouriteCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unfavouriteCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cardId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<UnfavouriteCardMutation, UnfavouriteCardMutationVariables>;
export const GetCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetCardsQuery, GetCardsQueryVariables>;
export const GetMyCardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetMyCardsQuery, GetMyCardsQueryVariables>;