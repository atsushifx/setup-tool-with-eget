// src: /configs/tsup.config.module.ts
// @(#)  : ESM用
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// system config
import { defineConfig } from 'tsup';

// user config
import { baseConfig } from '../../configs/tsup.config.base';

export default defineConfig({
  ...baseConfig,
  clean: true,
  format: ['esm'],
  entry: [
    'index.ts',
  ],
  tsconfig: './tsconfig.json',
  outDir: 'module', // for ESM
});
