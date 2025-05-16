// src: ./src/utils/__tests__/getPlatform.spec.ts
// @(#): プラットフォーム(OS)取得テスト
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as os from 'os';

// vitest
import { describe, expect, it, vi } from 'vitest';

// test unit
import { getPlatform } from '../getPlatform';

// Mock
vi.mock('os');

describe('getPlatform', () => {
  it('returns "linux" when platform is "linux"', () => {
    vi.spyOn(os, 'platform').mockReturnValue('linux');
    expect(getPlatform()).toBe('linux');
  });

  it('returns "windows" when platform is "win32"', () => {
    vi.spyOn(os, 'platform').mockReturnValue('win32');
    expect(getPlatform()).toBe('windows');
  });

  it('throws on unsupported platform', () => {
    vi.spyOn(os, 'platform').mockReturnValue('darwin');
    expect(() => getPlatform()).toThrow('Unsupported platform');
  });
});
