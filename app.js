const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is a success message from Jens'));

app.listen(port);
console.log(`Hello World http://localhost:${port}`);
