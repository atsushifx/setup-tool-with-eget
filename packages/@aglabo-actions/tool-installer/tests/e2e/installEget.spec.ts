// src: tests/installer/installEget.e2e.test.ts
// @(#) : eget インストールテスト: egetを実際にインストールできるかのテスト
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { installEget } from '@/installer/executor/EgetInitializer';
import getPlatform from '@/utils/getPlatform';
import { exec, execFile } from 'child_process';
import { promisify } from 'util';
import { describe, expect, it, should } from 'vitest';

const runFile = promisify(execFile);

describe('installEget (E2E)', () => {
  it('should install eget and return version', async () => {
    const egetPath = await installEget();
    const { stdout } = await runFile(egetPath, ['--version']);
    expect(stdout.trim()).toMatch(/\d+\.\d+\.\d+/); // e.g. 1.3.4
  }, 60_000); // wingetやcurlが遅い場合に備えてタイムアウト長めに
});
