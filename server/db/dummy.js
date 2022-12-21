const db = require("./db");
const Sequelize = require("sequelize");

const Dummy = db.define("dummies", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
    unique: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
  description: { type: Sequelize.TEXT },
});

module.exports = Dummy;
