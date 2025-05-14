// src: /src/installer/prepareInstallDirectory.ts
// @(#) : インストール用ディレクトリ初期設定
//
// Copyright (c) 2025 Furukawa Atsushi <atsushifx@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// src/installer/prepareInstallDirectory.ts
import * as core from '@actions/core';
import { mkdir } from 'fs/promises';
import { join } from 'path';
import { env } from 'process';

/**
 * GitHub Actions 用のツールインストールディレクトリを準備し、PATH に追加する
 * @returns 作成したディレクトリの絶対パス
 */
export async function prepareInstallDirectory(): Promise<string> {
  const baseDir = env.GITHUB_WORKSPACE || process.cwd();
  const installDir = join(baseDir, '.tools', 'bin');

  await mkdir(installDir, { recursive: true });
  core.addPath(installDir);
  core.info(`Added ${installDir} to PATH`);

  return installDir;
}

export default prepareInstallDirectory;
