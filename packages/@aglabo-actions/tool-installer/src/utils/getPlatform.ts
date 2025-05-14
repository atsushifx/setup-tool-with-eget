// src: /src/utils/getPlatform.ts
// @(#) : getPlatform : OS種別取得
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { platform } from 'os';

export type PlatformType = 'windows' | 'linux';

/**
 * 現在のOSを 'windows' または 'linux' に正規化して返す。
 * サポート外のOSではエラーをスローする。
 */
export function getPlatform(): PlatformType {
  const raw = platform();
  if (raw === 'win32') { return 'windows'; }
  if (raw === 'linux') { return 'linux'; }
  throw new Error(`Unsupported platform: ${raw}`);
}
