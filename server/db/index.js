const User = require("./user");
const Dummy = require("./dummy");
const db = require("./db");

User.hasMany(Dummy);
Dummy.belongsTo(User);

module.exports = {
  db,
  User,
  Dummy,
};
