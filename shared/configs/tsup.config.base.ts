// src: /shared/tsup.config.base.ts
// @(#) : tsup 基本設定
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// libs
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// types
import type { Options } from 'tsup';

// ✅ __dirname for ESM
const __dirname = dirname(fileURLToPath(import.meta.url));

export const baseConfig: Options = {
  format: ['esm'],
  target: 'es2022',
  dts: false,
  sourcemap: false,
  clean: true,
  minify: false,
  splitting: false,
  shims: false,
  // outDir: 'dist',  // それぞれのsub repositoryで設定

  // ⬇ Sub-repo will define this
  entry: [],
};
