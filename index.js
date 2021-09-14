#!/usr/bin/env node

const fs = require('fs');

const DIR = `./data`;

console.log({ DIR });

// Check if data folder exists
if (!fs.existsSync(DIR)) {
  fs.mkdirSync(DIR);
}

fs.writeFile(`${DIR}/test.json`, JSON.stringify({ hello: 'there' }), error => {
  if (error) {
    console.error(error);
    return;
  }
})