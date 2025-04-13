const http = require('http');

const [url1, url2, url3] = [process.argv[2], process.argv[3], process.argv[4]];

let allData = "";
http.get(url1, (res) => {
    res.on('data', (data) => {
        const s = data.toString();
        allData += s;
    })
    res.on('end', () => {
        console.log(allData);
        allData = "";
        http.get(url2, (res) => {
            res.on('data', (data) => {
                allData += data.toString();
            })
            res.on('end', () => {
                console.log(allData);
                allData = "";
                http.get(url3, (res) => {
                    res.on('data', (data) => {
                        allData += data.toString();
                    })
                    res.on('end', () => {
                        console.log(allData);
                    })
                })
            })
        })
    });
})