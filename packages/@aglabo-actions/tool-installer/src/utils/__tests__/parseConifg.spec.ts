// src: ./utils/__tests__/parseConfig.spec.ts
// 設定データ解析ユーティリティのユニットテスト
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// vitest
import { describe, expect, it } from 'vitest';

// test unit
import { AgActionInstallerType } from '@/shared/types';

import { parseJsoncConfig } from '../parseConfig';

// types

// testMain
describe('parseConfig JSONC format', () => {
  it('正しい JSONC を AgActionEgetToolConfig としてパースできる', () => {
    const raw = `
      // Eget 初期化用設定
      {
        "type": "${AgActionInstallerType.EGET}",
        "tool": "foo", // インラインコメント
        "package": "foo/bar",
        "options": {
            "version": "1.2.3",
            "targetDir": "~/bin",
            "flags": true,
        }
      }
    `;
    const parsed = parseJsoncConfig(raw);
    expect(parsed).toEqual({
      type: AgActionInstallerType.EGET,
      tool: 'foo',
      package: 'foo/bar',
      options: {
        version: '1.2.3',
        targetDir: '~/bin',
        flags: true,
      },
    });
  });

  it('必須フィールドが抜けたときは undefined になる', () => {
    const rawMissingOptions = `
    {
      "installer": "${AgActionInstallerType.EGET}",
      "tool": "foo",
      "package": "foo/bar"
    }
    `;
    const parsed = parseJsoncConfig(rawMissingOptions);
    expect(parsed).toEqual({
      installer: AgActionInstallerType.EGET,
      tool: 'foo',
      package: 'foo/bar',
    });
    expect(parsed.options).toBeUndefined();
  });
});
