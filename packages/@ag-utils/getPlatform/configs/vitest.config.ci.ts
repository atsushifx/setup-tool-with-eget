// src: ./configs/vitest.config.unit.ts
// @(#) : vitest config for textlint filter rule plugin
//
// @version   1.0.0
// @since     2025-05-14
// @author    atsushifx <https://github.com/atsushifx>
// @license   MIT
//
// @description<<
//
// Vitest configuration for running E2E Test (CI Test)
// Designed for TypeScript plugin development (textlint).
//
// <<

// libs
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// system config
import { defineConfig } from 'vitest/config';

// user common config
import baseConfig from '../../../../shared/configs/vitest.config.base';

// constants
const __dirname = dirname(fileURLToPath(import.meta.url));

// config
export default defineConfig({
  ...baseConfig,
  plugins: [],
  test: {
    ...baseConfig.test,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@shared': path.resolve(__dirname, '../../../../shared/common'),
    },
  },
});
