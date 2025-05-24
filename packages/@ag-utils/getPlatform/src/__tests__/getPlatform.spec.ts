// src: helper/configs/__tests__/ToolConfigManager.spec.ts
// @(#) : 設定管理クラスの機能テスト
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// vitest
import { describe, expect, it } from 'vitest';

// Mock

// test units
import { getPlatform } from '../getPlatform';

// type

// test main
describe('getPlatform', () => {
  it('returns "windows" for "win32"', () => {
    expect(getPlatform('win32')).toBe('windows');
  });

  it('returns "linux" for "linux"', () => {
    expect(getPlatform('linux')).toBe('linux');
  });

  it('returns "macos" for "darwin"', () => {
    expect(getPlatform('darwin')).toBe('macos');
  });

  it('throws for unsupported platforms by default (strict=true)', () => {
    expect(() => getPlatform('illegals')).toThrow(/Unsupported platform/);
  });

  it('returns undefined for unsupported platforms with strict=false', () => {
    expect(getPlatform('illegals', false)).toBeUndefined();
  });
});
