// src: ./src/shared/constants/directories.ts
// @(#) : パス、ディレクトリ関連の定数
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// libs
import * as path from 'path';
import { env } from 'process';

export const AgDir_BASE_DIR = env.GITHUB_WORKSPACE ?? process.cwd();
export const AgDir_INSTALL_DIR = path.join(AgDir_BASE_DIR, '.tools', 'bin');
export const AgDir_INSTALL_WINGET = path.join(env.LOCALAPPDATA || '', 'Microsoft', 'Winget', 'links');
