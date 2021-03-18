// write your server code here

const http = require('http');
const app = require('../app');

const server = http.createServer(app);
const port = 7000;
server.listen(port);
server.on('listening',()=>{
    console.log(`Server is started at Port, ${port}`);
})
