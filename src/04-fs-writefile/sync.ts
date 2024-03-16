#!/usr/bin/env node

import fs from 'fs'

try {
  fs.writeFileSync('./data.txt', 'Hello World')
  console.log('File created')
} catch (e) {
  console.error(e)
}
