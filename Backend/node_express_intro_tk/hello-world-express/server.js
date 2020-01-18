// const http = require('http');
const express = require('express');

const port = 5000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World, from NodeJS');
// });

const server = express();
server.use(express.json());

// server.get('/', (req, res) => {
//     res.send('Hello World from Express!');
// });

// server.get('/hobbits', (req, res) => {
//     res.send('Welcome to Hobbiton');
// });

server.get('/hobbits', (req, res) => {
    console.log(req.query);
    const sortField = req.query.sortBy || 'id';
    const hobbits = [
        {
            id: 1,
            name: 'Samwise Gamgee'
        },
        {
            id: 3,
            name: 'Bilboa Baggins',
        },
        {
            id: 2,
            name: 'Frodo Baggins',
        }
    ];
    
    const response = hobbits.sort(
        (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
      );

    res.status(200).json(response);
});

server.post('/hobbits', (req, res) => {
    res.status(201).json({ url: '/hobbits', operation: 'POST'});
});

server.put('/hobbits', (req, res) => {
    res.status(200).json({ url: '/hobbits', operation: 'PUT'});
});

server.delete('/hobbits/:id', (req, res) => {
    // res.status(204);
    const id = req.params.id;
    console.log(req.params);
    res.status(200).json({
        url: `/hobbits/${id}`,
        operation: `DELETE for hibbit with id ${id}`,
    });
});

server.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});