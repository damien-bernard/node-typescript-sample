#!/usr/bin/env node

import fs from 'fs'

const path: string = process.argv.length === 3 ? process.argv[2] : '.'

try {
  fs.readdirSync(path).forEach((file) => {
    console.log(file)
  })
} catch (e) {
  console.error(e)
}
