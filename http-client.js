const http = require('http');
const url = process.argv[2];

http.get(url, (res) => {
    res.on('err', console.error);
    res.on('data', function (data) { console.log(data.toString())})  
})
