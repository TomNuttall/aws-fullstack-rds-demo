# App

Frontend created with Vite, React + TypeScript.

## Overview

- [Apollo Client](https://www.apollographql.com/docs/react/) used for GraphQL client
- [React OAuth Google](https://www.npmjs.com/package/@react-oauth/google) used for SSO
- [Tailwindcss](https://tailwindcss.com/docs/installation) used for styling

## Run

```bash
yarn dev
```

### Env

Copy and rename .env.example to .env.
Can connect to localhost api (if backend running) or live api.

```bash
VITE_USE_LOCALHOST=true
```

### Test

Run unit tests

```bash
yarn test
```
