const path = require('path');

const ERROR = 'error';

module.exports = {
  overrides: [
    {
      files: ['**/*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      parserOptions: {
        schema: path.resolve('../packageA/schema.graphql'),
        operations: ['./src/**/*.graphql'
      ],
    },
      rules: {
        '@graphql-eslint/no-anonymous-operations': ERROR,
        '@graphql-eslint/require-id-when-available': ERROR,
        '@graphql-eslint/validate-against-schema': ERROR,
        '@graphql-eslint/require-deprecation-reason': ERROR,
        '@graphql-eslint/no-case-insensitive-enum-values-duplicates': ERROR,
        '@graphql-eslint/require-description': [
          ERROR,
        // https://github.com/dotansimha/graphql-eslint/blob/master/docs/rules/require-description.md#configuration
        {
            on: [
              'ObjectTypeDefinition',
              'FieldDefinition',
              'InputValueDefinition',
              'InterfaceTypeDefinition',
              'UnionTypeDefinition',
              'EnumTypeDefinition',
              'EnumValueDefinition',
              'InputObjectTypeDefinition',
              'DirectiveDefinition',
          ],
        },
      ],
    },
  },
],
}