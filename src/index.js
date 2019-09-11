#!/usr/bin/env node

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const YAML = require('yamljs');
const { processModel } = require('./process-model');

const defaultPrettierOpts = {
  parser: 'typescript',
};

module.exports = (modelPath, cmd) => {
  const prettierOpts = cmd.prettierOpts
    ? { ...defaultPrettierOpts, ...JSON.parse(fs.readFileSync(path.resolve(cmd.prettierOpts))) }
    : defaultPrettierOpts;
  const target = cmd.target || path.resolve(process.cwd(), 'generated-sources');
  const parser = modelPath.endsWith('.yaml') ? YAML : JSON;
  let data = '';

  console.log(`Reading model from: ${modelPath}`);

  if (modelPath.startsWith('http')) {
    const protocol = modelPath.split(':').shift();
    const handler = protocol === 'https' ? https : http;

    handler.get(modelPath, (response) => {
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => processModel(parser.parse(data), target, prettierOpts));
    });
  } else {
    const modelFullPath = path.resolve(modelPath);
    data = fs.readFileSync(modelFullPath, { encoding: 'utf8' }).toString();
    processModel(parser.parse(data), target, prettierOpts);
  }
};
