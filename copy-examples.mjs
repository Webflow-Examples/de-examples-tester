// copy-examples.js
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const srcDir = path.join(__dirname, 'src', 'examples')
const destDir = path.join(__dirname, 'copies')

fs.copySync(srcDir, destDir)
console.log('Files copied from src/examples to copies')
