const fs = require('fs');
const directory = process.argv[2];
const fileExt = process.argv[3];

fs.readdir(directory, (err, list) => {
    for (let i =0; i<list.length; i++) {
        const ext = list[i].split('.')[1];
        if (ext === fileExt) {
            console.log(list[i]);
        }
    }
})
