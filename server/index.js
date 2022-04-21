const express = require('express');
const app = express();
const jsParser = require('body-parser').json();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/', (req, res) => res.send('Hello'));

app.post('/signin',jsParser, (req,res) => {
  res.send(req.body.name);
});

app.listen(3000, () => console.log('sever is running'));

