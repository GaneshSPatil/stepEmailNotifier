var express = require('express');
var morgan = require('morgan')

var app = express();
app.use(morgan('combined'))

app.post('/', function (req, res) {
  res.send('POST request to homepage');
});

app.listen(4567);
