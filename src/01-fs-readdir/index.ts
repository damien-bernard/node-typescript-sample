#!/usr/bin/env node

import fs from 'fs'

const path: string = process.argv.length === 3 ? process.argv[2] : '.'

fs.readdir(path, (err, files) => {
  if (err != null) {
    console.error(err)
    return
  }
  console.log(files)
})
