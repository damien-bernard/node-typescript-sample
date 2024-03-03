#!/usr/bin/env node

import fs from 'fs'

const path: string = process.argv.length === 3 ? process.argv[2] : '.'

fs.readdir(path, (err, files) => {

  if (err != null) {
    console.error(err)
    return
  }

  files.forEach((file) => {
    const fullPath = `${path}/${file}`;
    fs.stat(fullPath, (err, stats) => {
      if (err) {
        console.error('Error getting file stats:', err);
        return;
      }

      console.log(`File: ${file}, Type: ${stats.isDirectory() ? 'Directory' : 'File'}, Size: ${stats.size} bytes`);
    });
  })

})
