const http = require('http');

const myServer = http.createServer(function (req, res) {
  res.write('Hello Holberton School!');
  res.end()
}).listen(1245);

module.exports = myServer;