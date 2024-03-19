#!/usr/bin/env node

import fs from 'fs/promises'

const path: string = process.argv.length === 3 ? process.argv[2] : '.'

async function readDir(path: string): Promise<void> {
  try {
    const files = await fs.readdir(path)
    for (const file of files) {
      const fullPath = `${path}/${file}`
      const stat = await fs.stat(fullPath)
      console.log(
        `File: ${file}, Type: ${stat.isDirectory() ? 'Directory' : 'File'}, Size: ${stat.size} bytes`,
      )
    }
  } catch (e) {
    console.error(e)
  }
}

void readDir(path)
