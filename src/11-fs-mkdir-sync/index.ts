#!/usr/bin/env node

import fs from 'fs'

try {
  fs.mkdirSync('new-directory')
  console.log('Directory created')
} catch (err) {
  console.error(err)
}
