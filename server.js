var express = require('express');
var morgan = require('morgan');
const authenticate = require('./lib/authenticate');

var app = express();

app.use(morgan('combined'));
app.use(authenticate);

app.post('/', function (req, res) {
  res.send('POST request to homepage');
});

app.listen(4567);
