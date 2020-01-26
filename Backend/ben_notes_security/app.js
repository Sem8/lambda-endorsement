const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());


app.get('/cors-example', (req, res) => res.send('Access Allowed!'));

app.listen(3000, () => console.log('App listening on port 3000'));