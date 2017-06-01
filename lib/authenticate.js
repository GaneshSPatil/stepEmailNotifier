const USERNAME = process.env.EMAIL_NOTIFIER_USERNAME || 'admin';
const PASSWORD = process.env.EMAIL_NOTIFIER_PASSWORD || 'badger';

module.exports = function (req, res, next) {
  var auth = req.get("authorization");
 if (!auth) {
   res.set("WWW-Authenticate", "Basic realm=\"Authorization Required\"");
   return res.status(401).send("Authorization Required");
 } else {
   var credentials = new Buffer(auth.split(" ").pop(), "base64").toString("ascii").split(":");
   if (credentials[0] === USERNAME && credentials[1] === PASSWORD) {
     next();
   } else {
     return res.status(403).send("Access Denied (incorrect credentials)");
   }
 }
};
