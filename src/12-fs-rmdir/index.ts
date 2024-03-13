#!/usr/bin/env node

import fs from 'fs'

fs.rmdir('directory-to-delete', (err) => {
  if (err != null) {
    console.error(err)
    return
  }
  console.log('Directory deleted')
})
