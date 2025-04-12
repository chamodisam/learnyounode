const fs = require('fs');
function filterList(dir, ext, callbackFunc) {
    let filteredList = [];
    fs.readdir(dir, (err, list) => {
        if (err) {
            callbackFunc(err);
            return;
        }
        for (let i =0; i<list.length; i++) {
            const fileExt = list[i].split('.')[1];
            if (ext === fileExt) {
                filteredList.push(list[i]);
            }
        }
        callbackFunc(null, filteredList);
    })
}
module.exports = filterList;
