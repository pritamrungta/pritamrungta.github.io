const fs = require('fs');
const path = require('path');

// Copy all files from out/ to root directory for GitHub Pages
function copyFiles(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      copyFiles(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clean up existing files (except source files)
const filesToKeep = [
  'src', 'node_modules', 'package.json', 'package-lock.json', 
  'next.config.js', 'tailwind.config.ts', 'tsconfig.json',
  'postcss.config.js', 'public', 'out', '.github', '.gitignore',
  'deploy.js', '.next', 'next-env.d.ts'
];

const rootFiles = fs.readdirSync('.');
rootFiles.forEach(file => {
  if (!filesToKeep.includes(file) && !file.startsWith('.')) {
    const filePath = path.join('.', file);
    if (fs.statSync(filePath).isFile()) {
      fs.unlinkSync(filePath);
    }
  }
});

// Copy built files to root
copyFiles('./out', '.');

console.log('Deployment files copied to root directory');
console.log('Ready for GitHub Pages deployment!');