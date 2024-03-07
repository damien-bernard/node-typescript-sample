#!/usr/bin/env node

import fs from 'fs'

fs.mkdir('new-directory', (err) => {
  if (err != null) {
    console.error(err)
  } else {
    console.log('Directory created')
  }
})
