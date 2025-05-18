// src/shared/types/load-configs.types.ts
// @(#) : 設定データ読み込み用型定義
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// 設定ファイルデータ
export type ConfigRawValue = string | undefined | ConfigRawObject | ConfigRawArray;
export type ConfigRawObject = {
  [key: string]: ConfigRawValue;
};
export type ConfigRawArray = {} & Array<ConfigRawValue>;
// トップレベルの設定値はオブジェクトまたは配列かもしれない
export type ConfigRaw = ConfigRawObject | ConfigRawArray;

// Search Config File Type
export enum ConfigType {
  USER = 'user',
  SYSTEM = 'system',
}
