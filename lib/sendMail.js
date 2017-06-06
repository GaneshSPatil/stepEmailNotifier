var email = require('emailjs/email');
var path = require('path');

var connectionArgs = require(path.resolve('configs/connectionArgs'));
var server = email.server.connect(connectionArgs);

module.exports = function(config) {
  config.from = "StepEmailNotifier <" + connectionArgs.user + "> "
  return new Promise((fulfil, reject) => {
    server.send(config, function (err, message) {
      err ? reject(err) : fulfil(message);
    });
  });
};
