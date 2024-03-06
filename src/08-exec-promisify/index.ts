#!/usr/bin/env node

import { exec } from 'child_process'
import { promisify } from 'util'

const execPromisify = promisify(exec)

async function execute(): Promise<void> {
  const { stdout, stderr } = await execPromisify('node --version')
  console.log(stdout)
  console.error(stderr)
}

void execute()
