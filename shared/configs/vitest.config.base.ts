// src: /shared/configs/vitest.config.base.ts
// @(#) : vitest config for textlint filter rule plugin
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// vitest
import { defineConfig } from 'vitest/config';

// libs
import { resolve } from 'path';

// configs
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'), // ルートパスとしての "@"
    },
  },
  test: {
    globals: true,
    environment: 'node',
    include: [
      // Unit Test (develop test) exec only sub repositories
      // 'src/**/*.test.ts',
      // 'src/**/*.spec.ts',
      // CI Tests exec all  repositories
      'tests/**/*.test.ts',
      'tests/**/*.spec.ts',
    ],
    exclude: [
      'node_modules/**',
      // 出力ディレクトリ
      'dist/**',
      'lib/**',
      'module/**',
      // コメントアウト
      `**/#*.ts`,
    ],
  },
});
