const app = require('./app');

const http = require('http');

require('dotenv').config()

const PORT = 3000;


const server = http.createServer(app); 

const {mongoConnect} = require('./services/mongo');

async function startServer() {
    await mongoConnect();
    server.listen(PORT, () => {
        console.log('Server is running on Port 3000');
    });
}


startServer();
