const http = require('http');
const today = require('./today');

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end(`Hello, World! The date today is ${today.getDate()}`);
}

const port = 8080;
const server = http.createServer(requestListener);
server.listen(port, () => console.log(`Server listening on port: ${port}`));