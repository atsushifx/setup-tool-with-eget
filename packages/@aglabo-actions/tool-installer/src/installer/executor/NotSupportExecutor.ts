// src/installer/executor/NotSupportExecutor.ts
// @(#) : 未対応のExecutor
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import type { AgActionInstallerExecutor, AgActionInstallOptions } from '@/shared/types';

export class NotSupportedExecutor implements AgActionInstallerExecutor {
  public async execute(_options: AgActionInstallOptions): Promise<boolean> {
    console.warn('このインストーラータイプはまだ実装されていません');
    return false;
  }
}

// export
export default NotSupportedExecutor;
