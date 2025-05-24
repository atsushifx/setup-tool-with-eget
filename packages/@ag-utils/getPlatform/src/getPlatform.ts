// src: /src/utils/getPlatform.ts
// @(#) : getPlatform : OS種別取得
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// lib
import * as os from 'os';

// type
export type PlatformType = 'windows' | 'linux' | 'macos' | undefined;

/**
 * Returns the normalized platform name of the current OS.
 *
 * - Returns 'windows', 'linux', or 'macos' based on Node.js `os.platform()` value.
 * - If the platform is unsupported, throws an error when `strict` is `true` (default),
 *   or returns `undefined` when `strict` is `false`.
 *
 * @param {string} [platform=os.platform()] - The platform string to normalize (defaults to `os.platform()`).
 * @param {boolean} [strict=true] - Whether to throw an error for unsupported platforms (`true`), or return `undefined` (`false`).
 * @returns {'windows' | 'linux' | 'macos' | undefined} Normalized platform name or `undefined`.
 * @throws {Error} If the platform is unsupported and `strict` is `true`.
 */
export const getPlatform = (
  platform: string = os.platform(),
  strict: boolean = true,
): PlatformType => {
  switch (platform) {
    case 'win32':
      return 'windows';
    case 'linux':
      return 'linux';
    case 'darwin':
      return 'macos';
  }

  if (strict) {
    throw new Error(`Unsupported platform: ${platform}`);
  }
  return undefined;
};

/**
 * Returns the appropriate PATH delimiter for the current platform.
 *
 * - Uses `getPlatform()` to determine the delimiter.
 * - Returns ';' for Windows, ':' for Linux/macOS, or ':' as a safe fallback for unsupported platforms.
 *
 * @returns {string} PATH delimiter (';' for Windows, ':' for others)
 */
export const getDelimiter = (): string => {
  return (getPlatform() === 'windows') ? ';' : ':';
};

export default getPlatform;
