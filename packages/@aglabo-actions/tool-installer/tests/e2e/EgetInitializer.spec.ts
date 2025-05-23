// src: tests/e2e/EgetInitializer.spec.ts
// @(#) : eget インストールテスト: egetを実際にインストールできるかのテスト
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// libs
import { execFile } from 'child_process';
import { promisify } from 'util';

// vitest
import { describe, expect, it } from 'vitest';

// test unit
import { EgetInitializer } from '@/installer/executor/EgetInitializer';
// types
import { AgActionInstallerExecutor, AgActionInstallOptions } from '@/shared/types';
// modules
import { commandExist } from '@/utils/commandExist';

// global var & executor
const runFile = promisify(execFile);
const options: AgActionInstallOptions = {};
const initializer: AgActionInstallerExecutor = new EgetInitializer();

// tests
describe('EgetInitializer (E2E)', () => {
  it('should install eget successfully', async () => {
    const success = await initializer.execute(options);
    expect(success).toBe(true);
  }, 60_000);

  it('should have eget available and report a valid version', async () => {
    const exists = await commandExist('eget');
    expect(exists).toBeTruthy();

    const { stdout } = await runFile('eget', ['--version']);
    expect(stdout.trim()).toMatch(/\d+\.\d+\.\d+/);
  }, 20_000);
});
