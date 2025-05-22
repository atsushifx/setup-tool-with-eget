// vitest.config.base.ts
// @(#) : vitest config for textlint filter rule plugin
//
// @version 1.0.0
// @since   2025-05-14
// @author  atsushifx <https://github.com/atsushifx>
// @license MIT
//
// @description<<
//
// Vitest configuration for running unit tests.
// Designed for TypeScript plugin development (textlint).
//
// <<

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
