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
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { prepareInstallDirectory } from '../prepareInstallDirectory';

vi.mock('fs/promises', () => ({
  mkdir: vi.fn().mockResolvedValue(undefined),
}));

describe('prepareInstallDirectory', () => {
  const mockWorkspace = '/fake/workspace';

  beforeEach(() => {
    vi.resetAllMocks();
    process.env.GITHUB_WORKSPACE = mockWorkspace;

    vi.spyOn(core, 'addPath').mockImplementation(() => {});
    vi.spyOn(core, 'info').mockImplementation(() => {});
  });

  it('GITHUB_WORKSPACE/.tools/bin にディレクトリを作成し、PATH に追加する', async () => {
    const dir = await prepareInstallDirectory();
    const expectedPath = join(mockWorkspace, '.tools', 'bin');

    expect(dir).toBe(expectedPath);
    expect(fs.mkdir).toHaveBeenCalledWith(expectedPath, { recursive: true });
    expect(core.addPath).toHaveBeenCalledWith(expectedPath);
    expect(core.info).toHaveBeenCalledWith(expect.stringContaining(expectedPath));
  });
});
