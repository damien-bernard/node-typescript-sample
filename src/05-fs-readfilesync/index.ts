#!/usr/bin/env node

import fs from 'fs'

try {
  const content = fs.readFileSync('./package.json').toString()
  console.log(content)
} catch (e) {
  console.error(e)
}
