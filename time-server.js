const net = require('net');

const port = process.argv[2];

function getDateString() {
    const date = new Date();
    let month = Number(date.getMonth()) + 1;
    month = month < 10 ? "0" + String(month) : month = String(month);
    return date.getFullYear() + "-" + month + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";
}

const server = net.createServer(function (socket) {  
    // socket handling logic
    socket.write(getDateString());
    socket.end();
})  

server.listen(port)

