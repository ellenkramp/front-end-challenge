const http = require('http');
const fs = require('fs');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res)  => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const payload = fs.readFileSync('./data_set.json', 'utf8');
  res.end(payload);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
 });

app.listen(1337);

console.log('Server started...');
