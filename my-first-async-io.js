const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, data) => {
    const fileLines = data.split('\n');
    console.log(fileLines.length - 1);
});

