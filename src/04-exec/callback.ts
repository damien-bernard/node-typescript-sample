#!/usr/bin/env node

import { exec } from 'child_process'

const process = exec('node --version', (err, stdout, stderr) => {
  if (err != null) {
    console.error(err)
    return
  }
  console.log(stdout)
})
console.log('Process pid:', process.pid)
