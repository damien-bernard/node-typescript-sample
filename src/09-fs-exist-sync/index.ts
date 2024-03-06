#!/usr/bin/env node

import fs from 'fs'

const path: string = process.argv.length === 3 ? process.argv[2] : '.'

if (!fs.existsSync(path)) {
  console.log('Path does not exist')
} else {
  console.log('Path exists')
}
