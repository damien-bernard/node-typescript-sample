#!/usr/bin/env node

import { execSync } from 'child_process'

const buffer = execSync('node --version')
console.log(buffer.toString())
