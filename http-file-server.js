const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const fileLocation = process.argv[3];

const stream = fs.createReadStream(fileLocation);

const server = http.createServer((req, res) => {
    stream.pipe(res);
});

server.listen(port);
