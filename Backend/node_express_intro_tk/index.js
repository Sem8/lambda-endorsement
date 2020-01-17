// server? What is a server?
// Server is place in your computer that's listening for traffic. And when it receives
// that traffic, it knows what to do with that traffic

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World, from NodeJS');
});

server.listen(port, hostname, () => {
    console.log(`server listening on http://${hostname}: ${port}`);
})