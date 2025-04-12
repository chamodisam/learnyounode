const http = require('http');

const url = process.argv[2];

let allData = "";
let stringCount = 0;
http.get(url, (res) => {
    res.on('data', (data) => {
        const s = data.toString();
        allData += s;
        stringCount += s.length;
    })
    res.on('end', () => {
        console.log(stringCount);
        console.log(allData);
    });
})
