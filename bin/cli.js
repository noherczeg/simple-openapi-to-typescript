#!/usr/bin/env node

const commander = require('commander');
const generator = require('../src');

commander
  .command('generate <modelPath>')
  .option('-t, --target <target>', 'Target directory')
  .option('-o, --prettier-opts <prettierOpts>', 'Path to Prettier configuration object')
  .action(generator);

commander.parse(process.argv);
