/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation FavouriteCard($cardId: Int!) {\n    favouriteCard(cardId: $cardId) {\n      id\n      name\n      value\n      shiny\n    }\n  }\n": types.FavouriteCardDocument,
    "\n  mutation UnfavouriteCard($cardId: Int!) {\n    unfavouriteCard(cardId: $cardId) {\n      id\n      name\n      value\n      shiny\n    }\n  }\n": types.UnfavouriteCardDocument,
    "\n  query GetCard($cardId: Int!) {\n    getCard(cardId: $cardId) {\n      id\n      name\n      value\n      shiny\n    }\n  }\n": types.GetCardDocument,
    "\n  query GetAllCards($pageNo: Int!, $perPage: Int!, $filter: String) {\n    getAllCards(pageNo: $pageNo, perPage: $perPage, filter: $filter) {\n      paginatedData {\n        id\n        name\n        value\n        shiny\n      }\n      paginatedTotal\n    }\n  }\n": types.GetAllCardsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation FavouriteCard($cardId: Int!) {\n    favouriteCard(cardId: $cardId) {\n      id\n      name\n      value\n      shiny\n    }\n  }\n"): (typeof documents)["\n  mutation FavouriteCard($cardId: Int!) {\n    favouriteCard(cardId: $cardId) {\n      id\n      name\n      value\n      shiny\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UnfavouriteCard($cardId: Int!) {\n    unfavouriteCard(cardId: $cardId) {\n      id\n      name\n      value\n      shiny\n    }\n  }\n"): (typeof documents)["\n  mutation UnfavouriteCard($cardId: Int!) {\n    unfavouriteCard(cardId: $cardId) {\n      id\n      name\n      value\n      shiny\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCard($cardId: Int!) {\n    getCard(cardId: $cardId) {\n      id\n      name\n      value\n      shiny\n    }\n  }\n"): (typeof documents)["\n  query GetCard($cardId: Int!) {\n    getCard(cardId: $cardId) {\n      id\n      name\n      value\n      shiny\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllCards($pageNo: Int!, $perPage: Int!, $filter: String) {\n    getAllCards(pageNo: $pageNo, perPage: $perPage, filter: $filter) {\n      paginatedData {\n        id\n        name\n        value\n        shiny\n      }\n      paginatedTotal\n    }\n  }\n"): (typeof documents)["\n  query GetAllCards($pageNo: Int!, $perPage: Int!, $filter: String) {\n    getAllCards(pageNo: $pageNo, perPage: $perPage, filter: $filter) {\n      paginatedData {\n        id\n        name\n        value\n        shiny\n      }\n      paginatedTotal\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;