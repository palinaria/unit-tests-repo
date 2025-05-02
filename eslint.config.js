import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        mocha: 'readonly',
      },
    },
    plugins: {
      js,
    },
    rules: {
      'quotes': ['error', 'single'],
      'max-len': ['error', { code: 120 }],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],

      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'camelcase': ['error', { properties: 'always' }],

      'arrow-spacing': ['error', { before: true, after: true }],
      'space-before-function-paren': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'no-console': 'warn',

      'eqeqeq': ['error', 'always'],
      'no-else-return': 'error',
      'curly': ['error', 'all'],
      'no-fallthrough': 'error',
      'default-case': 'error',

      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-prototype-builtins': 'error',

      'prefer-arrow-callback': 'error',
      'no-duplicate-imports': 'error',
      'template-curly-spacing': ['error', 'never'],
      'rest-spread-spacing': ['error', 'never'],

      'no-debugger': 'warn',
      'no-undef': 'error',
      'consistent-return': 'error',
    },
  },
]);
