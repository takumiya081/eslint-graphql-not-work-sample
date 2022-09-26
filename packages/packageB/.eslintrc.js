const path = require('path');

module.exports = {
  overrides: [
     {
      // Setup GraphQL Parser
      files: '*.{graphql,gql}',
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      parserOptions: {
        schema: path.resolve(__dirname, '../packageA/schema.graphql'),
        operations: path.resolve(__dirname, './src/**/*.graphql'),
        skipGraphQLConfig: true
      },
    },
    {
      files: ['**/*.graphql'],
      extends: 'plugin:@graphql-eslint/operations-all',
    },
  ]
};