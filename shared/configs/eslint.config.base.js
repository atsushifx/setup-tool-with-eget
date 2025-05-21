// src: /shared/configs/eslint.config.base.js
//
// @(#) : ESLint flat config for TypeScript workspace
//
// @version   1.0.0
// @since     2025-05-14
// @author    atsushifx <https://github.com/atsushifx>
// @license   MIT
//
// @description<<
// ESLint configuration using Flat Config format (ESLint v8+).
// - Enables recommended rules for both JavaScript and TypeScript
// - Uses @typescript-eslint/parser and plugin for TS support
// - Declares globals like `console`, `process`, `__dirname`
// - Applies config to all `*.ts` files
// <<

import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
//
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // JavaScriptの推奨設定を統合
  js.configs.recommended,

  {
    files: ['src/**/*.ts', 'tests/**/*.ts', 'types/**/*.ts'],
    ignores: ['**/lib/**', '**/module/**', '**/dist/**', '**/node_modules/**'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'import': importPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'import/no-unresolved': 'error',
      'import/order': ['warn', {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
      }],
      'func-style': ['error', 'expression'],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: ['./tsconfig.json'],
        },
        node: {
          moduleDirectory: ['node_modules', 'src/'],
        },
      },
    },
  },
];
