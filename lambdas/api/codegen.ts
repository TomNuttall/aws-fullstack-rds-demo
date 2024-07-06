import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/schemas/schema.graphql',
  generates: {
    './src/__generated__/resolvers-types.ts': {
      config: {
        useIndexSignature: true,
        contextType: '../types/types#Context',
      },
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
}
export default config
