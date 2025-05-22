// src: /shared/tsup.config.ts
// @(#)  : 型、定数要設定
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// system config
import { defineConfig } from 'tsup';

// user config
import { baseConfig } from '../configs/tsup.config.base';

export default defineConfig({
  ...baseConfig,
  clean: true,
  dts: true,
  sourcemap: true,
  skipNodeModulesBundle: true,
  format: ['esm'],
  entry: {
    'index': 'index.ts',
    'constants/index': 'constants/index.ts',
    'types/index': 'types/index.ts',
  },
  tsconfig: './tsconfig.json',
  outDir: 'lib',
});
