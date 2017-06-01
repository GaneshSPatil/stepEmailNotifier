const  express = require('express');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator');


var morgan = require('morgan');
const authenticate = require('./lib/authenticate');

var app = express();

app.use(morgan('combined'));
app.use(authenticate);
app.use(bodyParser.json());
app.use(expressValidator([]));

app.post('/', function (req, res) {
  req.checkBody({
    'subject': {
      notEmpty: true
    }
  });

  req.getValidationResult().then(function(result) {
    if (!result.isEmpty()) {
     res.status(400).send('Validation Failed:\n' + JSON.stringify(result.array()));
     return;
    }
    res.send('POST request to homepage');
  });
});

app.listen(4567);
