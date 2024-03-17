#!/usr/bin/env node

import fs from 'fs/promises'

const path: string = process.argv.length === 3 ? process.argv[2] : '.'

async function readDir(path: string): Promise<void> {
  try {
    const files = await fs.readdir(path)
    files.forEach((file) => {
      console.log(file)
    })
  } catch (e) {
    console.error(e)
  }
}

void readDir(path)
