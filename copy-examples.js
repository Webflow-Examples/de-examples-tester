// copy-examples.js

const fs = require('fs-extra');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'examples');
const destDir = path.join(__dirname, 'copies');

fs.copySync(srcDir, destDir);
console.log('Files copied from src/examples to copies');
