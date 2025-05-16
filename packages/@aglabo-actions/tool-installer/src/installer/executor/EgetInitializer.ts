// src: ./src/installer/executor/EgetInitializer.ts
// @(#) : eGetをインストールするExecutor
//
// Copyright (c) 2025 atsushifx <http://github.com/atsushifx>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// libs
import { exec } from 'child_process';
import { join } from 'path';
import { promisify } from 'util';

import commandExists from 'command-exists';

// modules
import { getPlatform } from '@/utils/getPlatform';
import { prepareInstallDirectory } from '@/utils/prepareInstallDirectory';
// types
import { AgActionInstallerExecutor, AgActionInstallOptions } from '@shared/types';

// routine
const run = promisify(exec);

export class EgetInitializer implements AgActionInstallerExecutor {
  public async execute(options: AgActionInstallOptions): Promise<boolean> {
    // already installed eget
    if (await this.getExistEget()) {
      return true;
    }

    // create install directory
    const installDir = await prepareInstallDirectory();
    if (!installDir) {
      return false;
    }

    try {
      const platform = getPlatform();
      if (platform === 'windows') {
        await this.installWindows(options, installDir);
      } else {
        await this.installLinux(options, installDir);
      }
      return true;
    } catch (err) {
      console.error('eget installation failed: ', err);
      return false;
    }
  }

  private async installWindows(options: AgActionInstallOptions, installDir: string): Promise<string> {
    const targetPath = join(installDir, 'eget.exe');

    const installCommand =
      `winget install --id=ZacharyYedidia.Eget --accept-package-agreements --accept-source-agreements --location ${installDir} --force`;
    await run(installCommand);
    return targetPath;
  }

  private async installLinux(options: AgActionInstallOptions, installDir: string): Promise<string> {
    const targetPath = join(installDir, 'eget');

    const installCommand = `cd ${installDir} && curl -sSf https://zyedidia.github.io/eget.sh | bash`;
    await run(installCommand);
    return targetPath;
  }

  private async getExistEget(): Promise<boolean> {
    try {
      await commandExists('eget');
      return true;
    } catch {
      return false; // falsy
    }
  }
}

export default EgetInitializer;
