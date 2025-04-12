const filePath = process.argv[2];

const fs = require('fs');

const file = fs.readFileSync(filePath, 'utf8').toString().split('\n');

console.log(file.length - 1);
