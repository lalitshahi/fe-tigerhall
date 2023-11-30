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
    "\n  {\n    contentCards(filter: { limit: 20, keywords: \"\", types: [PODCAST] }) {\n      edges {\n        ... on Podcast {\n          name\n          length\n          timeSpentOnByUsers\n          image {\n            ...Image\n          }\n          categories {\n            ...Category\n          }\n          experts {\n            ...Expert\n          }\n        }\n      }\n    }\n  }\n\n  fragment Image on Image {\n    uri\n  }\n\n  fragment Category on Category {\n    name\n  }\n\n  fragment Expert on Expert {\n    firstName\n    lastName\n    title\n    company\n  }\n": types.ImageFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  {\n    contentCards(filter: { limit: 20, keywords: \"\", types: [PODCAST] }) {\n      edges {\n        ... on Podcast {\n          name\n          length\n          timeSpentOnByUsers\n          image {\n            ...Image\n          }\n          categories {\n            ...Category\n          }\n          experts {\n            ...Expert\n          }\n        }\n      }\n    }\n  }\n\n  fragment Image on Image {\n    uri\n  }\n\n  fragment Category on Category {\n    name\n  }\n\n  fragment Expert on Expert {\n    firstName\n    lastName\n    title\n    company\n  }\n"): (typeof documents)["\n  {\n    contentCards(filter: { limit: 20, keywords: \"\", types: [PODCAST] }) {\n      edges {\n        ... on Podcast {\n          name\n          length\n          timeSpentOnByUsers\n          image {\n            ...Image\n          }\n          categories {\n            ...Category\n          }\n          experts {\n            ...Expert\n          }\n        }\n      }\n    }\n  }\n\n  fragment Image on Image {\n    uri\n  }\n\n  fragment Category on Category {\n    name\n  }\n\n  fragment Expert on Expert {\n    firstName\n    lastName\n    title\n    company\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;