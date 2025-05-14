// src: /src/installer/ensureEget.ts
// @(#) : eget
//
// Copyright (c) 2025 Furukawa Atsushi <atsushifx@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import commandExists from 'command-exists';

export async function isEgetAvailable(): Promise<boolean> {
  try {
    await commandExists('eget');
    return true;
  } catch {
    return false;
  }
}
