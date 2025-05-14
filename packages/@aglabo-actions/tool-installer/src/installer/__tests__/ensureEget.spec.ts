// src: /src/installer/__tests__/ensureEget.spec.ts
// @(#) : eget インストールも樹0る用テスト
//
// Copyright (c) 2025 Furukawa Atsushi <atsushifx@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// src/installer/__tests__/ensureEget.spec.ts
import commandExists from 'command-exists';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { isEgetAvailable } from '../ensureEget';

// command-exists を default モックとして差し替え
vi.mock('command-exists', () => ({
  default: vi.fn(),
}));

describe('isEgetAvailable', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('eget が存在する場合 true', async () => {
    vi.mocked(commandExists).mockResolvedValue(undefined);
    const result = await isEgetAvailable();
    expect(result).toBe(true);
  });

  it('eget が存在しない場合 false', async () => {
    vi.mocked(commandExists).mockRejectedValue(new Error('not found'));
    const result = await isEgetAvailable();
    expect(result).toBe(false);
  });
});
