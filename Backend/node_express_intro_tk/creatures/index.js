const express = require('express');
const racesRoutes = require('./races/racesRoutes');

const server = express();


server.use('/races', racesRoutes);

server.use('/', (req, res) => {
    res.status(200).send('Hello from express app running');
});



server.listen(8000, () => {
    console.log(`magic happening on port 8000`);
});