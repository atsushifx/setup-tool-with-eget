// src: ./src/installer/installEget.ts
// @(#) : eget インストール本体
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getPlatform } from '@/utils/getPlatform';
import { prepareInstallDirectory } from '@/utils/prepareInstallDirectory';
import { exec } from 'child_process';
import commandExists from 'command-exists';
import { copyFile } from 'fs/promises';
import { join } from 'path';
import { promisify } from 'util';

const run = promisify(exec);

export async function installEget(): Promise<string> {
  const existEget = await getExistEget();
  if (existEget) {
    return existEget;
  }

  const platform = getPlatform();
  switch (platform) {
    case 'windows':
      return installEgetWindows();
    case 'linux':
      return installEgetLinux();
  }
  throw new Error(`Unsupported platform: ${platform}`);
}

async function installEgetWindows(): Promise<string> {
  const installDir = await prepareInstallDirectory();
  const targetPath = join(installDir, 'eget.exe');

  await run(
    'winget install --id=ZacharyYedidia.Eget --accept-package-agreements --accept-source-agreements --location C:\\temp\\eget --force',
  );

  const linkPath = join(
    process.env.LOCALAPPDATA || '',
    'Microsoft',
    'WinGet',
    'Links',
    'eget.exe',
  );

  await copyFile(linkPath, targetPath);

  return targetPath;
}

async function installEgetLinux(): Promise<string> {
  const installDir = await prepareInstallDirectory();
  const targetPath = join(installDir, 'eget');

  const installCmd = `curl -sSf https://zyedidia.github.io/eget.sh | bash -s -- -d ${installDir}`;
  await run(installCmd, { shell: `bash'` });

  return targetPath;
}

export async function getExistEget(): Promise<string> {
  try {
    const result = await commandExists('eget');
    return result;
  } catch {
    return ''; // falsy
  }
}
