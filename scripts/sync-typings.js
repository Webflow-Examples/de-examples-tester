import fs from 'fs'
import path from 'path'

// Configuration
const SOURCE_DIR = path.join(
  process.cwd(),
  'node_modules/@webflow/designer-extension-typings',
)
const TARGET_DIR = path.join(process.cwd(), 'src/designer-extension-typings')

// Ensure target directory exists
if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true })
}

// Helper function to copy files
function copyFiles(sourceDir, targetDir) {
  const files = fs.readdirSync(sourceDir)

  files.forEach((file) => {
    if (file.endsWith('.d.ts')) {
      const sourcePath = path.join(sourceDir, file)
      const targetPath = path.join(targetDir, file)

      // Read source file
      const content = fs.readFileSync(sourcePath, 'utf8')

      // Write to target directory
      fs.writeFileSync(targetPath, content)
      console.log(`✓ Synced ${file}`)
    }
  })
}

try {
  // Copy files
  copyFiles(SOURCE_DIR, TARGET_DIR)
  console.log('\n✅ Successfully synced designer extension typings')
} catch (error) {
  console.error('\n❌ Error syncing typings:', error.message)
  process.exit(1)
}
