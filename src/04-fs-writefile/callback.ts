#!/usr/bin/env node

import fs from 'fs'

fs.writeFile('./data.txt', 'Hello World', (err) => {
  if (err != null) {
    console.error(err)
    return
  }
  console.log('File created')
})
