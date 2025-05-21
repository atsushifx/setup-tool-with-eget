// src: ./helper/tool-config/__tests__/findConfigFile.spec.ts
// @(#) : 設定ファイル探索ユーティリティ（prefix/extension 固定版）
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// libs
import * as fs from 'fs';
import { resolve } from 'path';

// vitest
import { describe, expect, it, vi } from 'vitest';

// mock
let expectedConfigFile: string;
vi.mock('fs', async () => {
  const realFs = await vi.importActual<typeof import('fs')>('fs');
  return {
    ...realFs,
    existsSync: (p: fs.PathLike) => {
      return String(p) === expectedConfigFile;
    },
  };
});

// test unit
import { findConfigFile } from '../findConfigFile';

// test main
describe('findConfigFile', () => {
  // config Files
  const BASE_NAMES = ['app.config'];
  const DIRS_JSON = [resolve('/project/configs'), resolve('/project')];

  // config file for unittest

  it('finds app.config.json in configs without dot prefix', () => {
    const BASE_NAMES = ['app.config'];
    const DIRS = [resolve('/project/configs'), resolve('/project')];
    expectedConfigFile = resolve('/project/configs/app.config.json');

    const result = findConfigFile(BASE_NAMES, DIRS);
    expect(result).toBe(expectedConfigFile);
  });

  it('finds app.config.yaml in configs with dot prefix', () => {
    const BASE_NAMES = ['app.config'];
    const DIRS = [resolve('/project/.configs'), resolve('/project')];
    expectedConfigFile = resolve('/project/.configs/.app.config.yaml');

    const result = findConfigFile(BASE_NAMES, DIRS);
    console.log('findConfigFile returned:', result);
    expect(result).toBe(expectedConfigFile);
  });

  it('throws when only the extension-less .config file would match', () => {
    // Even if we set the “expected” path to the plain .config file,
    // none of the generated candidates include an extension-less name,
    // so existsSync always returns false and we get an exception.
    expectedConfigFile = resolve('/project/configs/app.config');

    expect(() => findConfigFile(BASE_NAMES, DIRS_JSON))
      .toThrow('Config file not found.');
  });
});
