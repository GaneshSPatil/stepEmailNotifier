var email = require('emailjs/email');
var fs = require('fs');
var configFile = "../configs/mail.json";
var mailConfig = JSON.parse(fs.readFileSync(configFile)) || {};

var connectionArgs = function () {
  return {
    user: mailConfig.admin_id,
    password: mailConfig.admin_password,
    host: mailConfig.host,
    ssl: true
  }
};

var message = {
  text: mailConfig.text,
  from: mailConfig.admin_name + " <" + mailConfig.admin_id + "> ",
  to: "ganeshp8996@gmail.com, ganeshpl@thoughtworks.com",
  attachment: mailConfig.attachments,
  subject: mailConfig.subject
};

var server = email.server.connect(connectionArgs());
server.send(message, function (err, message) {
  console.log(err || message);
});
