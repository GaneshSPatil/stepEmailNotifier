const  express = require('express');
const bodyParser = require('body-parser')
const expressValidator = require('express-validator');

var morgan = require('morgan');
const path = require('path');
const sendMail = require(path.resolve('lib/sendMail'));
const authenticate = require(path.resolve('lib/authenticate'));

var app = express();

app.use(morgan('combined'));
app.use(authenticate);
app.use(bodyParser.json());

app.post('/api/send_mail', function (req, res) {
  var mailConfig = {
    text: req.body.content,
    to: req.body.to.join(', '),
    attachment: req.body.attachments || [],
    subject: req.body.subject
  };

   sendMail(mailConfig)
    .then((msg) => res.send(msg))
    .catch((err) => res.status(400).send(err));
});

app.listen(4567);
