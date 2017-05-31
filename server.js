var express = require('express');
var app = express();

app.post('/', function (req, res) {
  res.send('POST request to homepage');
});

app.listen(4567);
