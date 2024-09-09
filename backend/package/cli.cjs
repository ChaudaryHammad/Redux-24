#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const copyFile = (src, dest) => {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
};

const copyDirectory = (srcDir, destDir) => {
  fs.readdirSync(srcDir).forEach(item => {
    const srcPath = path.join(srcDir, item);
    const destPath = path.join(destDir, item);

    // Exclude directories or files that should not be copied
    if (item === 'node_modules' || item === 'cli.js' || item === 'package.json') {
      return;
    }

    if (fs.statSync(srcPath).isDirectory()) {
      if (srcPath !== destDir) {
        fs.mkdirSync(destPath, { recursive: true });
        copyDirectory(srcPath, destPath);
      }
    } else if (fs.statSync(srcPath).isFile()) {
      copyFile(srcPath, destPath);
    }
  });
};

const createProject = (projectName) => {
  const basePath = path.resolve(process.cwd(), projectName);
  const templatePath = path.resolve(__dirname); // Path to the current directory where the CLI script is located

  if (fs.existsSync(basePath)) {
    console.error(`Directory ${basePath} already exists. Please choose a different project name.`);
    process.exit(1);
  }

  fs.mkdirSync(basePath, { recursive: true });

  copyDirectory(templatePath, basePath);

  console.log(`Project ${projectName} created successfully at ${basePath}`);
};

const { Command } = require('commander');
const program = new Command();

program
  .version('1.0.0')
  .argument('<project-name>', 'Name of the project')
  .action((projectName) => {
    createProject(projectName);
  });

program.parse(process.argv);
