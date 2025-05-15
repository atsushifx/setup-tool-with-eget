// src: /src/installer/__tests__/prepareInstallDirectory.spec.ts
// @(#) : eget インストールも樹0る用テスト
//
// Copyright (c) 2025 atsushifx <https://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
// tests/installer/prepareInstallDirectory.spec.ts

// tests/installer/prepareInstallDirectory.spec.ts
import * as core from '@actions/core';
import * as fs from 'fs/promises';
import { join } from 'path';
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { prepareInstallDirectory } from '../prepareInstallDirectory';

const MockInstallDir = '/fake/installer/.tool/bin';

vi.mock('fs/promises', () => ({
  mkdir: vi.fn().mockResolvedValue(undefined),
}));

describe('prepareInstallDirectory', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.spyOn(core, 'addPath').mockImplementation(() => {});
    vi.spyOn(core, 'info').mockImplementation(() => {});
  });

  it('GITHUB_WORKSPACE/.tools/bin にディレクトリを作成し、PATH に追加する', async () => {
    const dir = await prepareInstallDirectory(MockInstallDir);
    const expectDir = MockInstallDir;

    expect(dir).toBe(expectDir);
    expect(fs.mkdir).toHaveBeenCalledWith(expectDir, { recursive: true });
    expect(core.addPath).toHaveBeenCalledWith(expectDir);
    expect(core.info).toHaveBeenCalledWith(expect.stringContaining(expectDir));
  });
});
