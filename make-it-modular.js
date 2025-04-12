const filterList = require('./mymodule.js');

const directory = process.argv[2];
const fileExt = process.argv[3];

filterList(directory, fileExt, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        for (let i =0; i<data.length; i++) {
            console.log(data[i]);
        }
    }
})
