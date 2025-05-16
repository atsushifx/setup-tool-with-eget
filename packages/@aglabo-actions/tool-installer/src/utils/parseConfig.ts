// src: ./utils/parseConfig.ts
// 設定データ解析ユーティリティ
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// libs
import { parse as parseJsonc } from 'comment-json';

// types
import { AgActionToolConfig } from '@/shared/types';

export const parseJsoncConfig = (configRaw: string): AgActionToolConfig => {
  return parseJsonc(configRaw) as unknown as AgActionToolConfig;
};
