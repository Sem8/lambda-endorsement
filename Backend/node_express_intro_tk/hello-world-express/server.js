// const http = require('http');
const express = require("express");

const port = 5000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World, from NodeJS');
// });

const server = express();
server.use(express.json());

// write custom middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get(
      "Origin"
    )}`
  );
  next();
}

function atGate(req, res, next) {
    console.log('At the gate about to be eaten');

    next();    
}

function auth(req, res, next) {
    if(req.url === '/mellon') {
        next();
    } else {
        res.send('You shall not pass!');
    }
}

server.use(logger);
server.use(atGate);

server.get('/mellon', auth, (req, res) => {
    console.log('Gate opening...');
    console.log('Inside and safe!');
    res.send('Welcome Traverler!');
});

// server.get('/', (req, res) => {
//     res.send('Hello World from Express!');
// });

// server.get('/hobbits', (req, res) => {
//     res.send('Welcome to Hobbiton');
// });

server.get("/hobbits", (req, res) => {
  console.log(req.query);
  const sortField = req.query.sortBy || "id";
  const hobbits = [
    {
      id: 1,
      name: "Samwise Gamgee"
    },
    {
      id: 3,
      name: "Bilboa Baggins"
    },
    {
      id: 2,
      name: "Frodo Baggins"
    }
  ];

  const response = hobbits.sort((a, b) =>
    a[sortField] < b[sortField] ? -1 : 1
  );

  res.status(200).json(response);
});

// server.post('/hobbits', (req, res) => {
//     res.status(201).json({ url: '/hobbits', operation: 'POST'});
// });

let hobbits = [
  {
    id: 1,
    name: "Bilbo Baggins",
    age: 111
  },
  {
    id: 2,
    name: "Frodo Baggins",
    age: 33
  }
];
let nextId = 3;

// and modify the post endpoint like so:
server.post("/hobbits", (req, res) => {
  console.log(req.body);
  const hobbit = req.body;
  hobbit.id = nextId++;

  hobbits.push(hobbit);

  res.status(201).json(hobbits);
});

// server.put('/hobbits', (req, res) => {
//     res.status(200).json({ url: '/hobbits', operation: 'PUT'});
// });

server.put("/hobbits/:id", (req, res) => {
  const hobbit = hobbits.find(eachHobbit => eachHobbit.id == req.params.id);

  if (!hobbit) {
    res.status(404).json({ message: "Hobbit does not exist" });
  } else {
    Object.assign(hobbit, req.body);

    res.status(200).json(hobbit);
  }
});

server.delete("/hobbits/:id", (req, res) => {
  // res.status(204);
  const id = req.params.id;
  console.log(req.params);
  res.status(200).json({
    url: `/hobbits/${id}`,
    operation: `DELETE for hibbit with id ${id}`
  });
});

// write custom middleware here
server.use(function(req, res) {
  res.status(404).send(`Ain't nobody got time for dat!`);
});

server.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
