#!/usr/bin/env node

import fs from 'fs'

fs.readFile('./package.json', (err, data) => {
  if (err != null) {
    console.error(err)
    return
  }

  console.log(data.toString())
})
