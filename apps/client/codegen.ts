import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/graphql/schema.graphql',
  documents: ['src/graphql/mutations.ts', 'src/graphql/queries.ts'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
}

export default config
