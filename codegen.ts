import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/gql/**.graphql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/generated/gql/': {
      preset: 'client',
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
