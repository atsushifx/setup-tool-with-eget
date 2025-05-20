// src: /src/shared/types/AgActionInstallerHandler.types.ts
// @(#) : インストーラーハンドラーの型定義
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// enum definition
export enum AgActionInstallerType {
  EGET_INITIALIZE = 'eget-initialize',
  EGET = 'eget',
  SCRIPT = 'script',
}

// --- type / interface
export type AgActionInstallOptions = {
  version?: string;
  installDir?: string;
  args?: string[];
};

export interface AgActionInstallerExecutor {
  execute(options: AgActionInstallOptions): Promise<boolean>;
}

// --- type definition
export type AgActionInstallerExecutorsMap = Record<
  AgActionInstallerType,
  AgActionInstallerExecutor
>;
