# API

Backend GraphQL API

## Overview

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) used for GraphQL server
- [Drizzle](https://orm.drizzle.team/docs/overview) used for DB orm.
- [Clerk](https://clerk.com/blog/how-to-secure-api-gateway-using-jwt-and-lambda-authorizers-with-clerk#using-clerk-with-api-gateway-authorizers) used for authentication.
- [GraphQL Shield](https://the-guild.dev/graphql/shield/docs) used for permissions.

db-helpers

```
yarn add @tn/db-helper@file:./../../packages/db-helper
```

## Run

```bash
yarn dev
```

### Test

Run unit tests

```bash
yarn test
```
