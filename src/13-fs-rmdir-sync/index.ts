#!/usr/bin/env node

import fs from 'fs'

try {
  fs.rmdirSync('directory-to-delete')
  console.log('Directory deleted')
} catch (err) {
  console.error(err)
}
