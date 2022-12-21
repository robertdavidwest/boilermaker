const db = require("./db");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SALT_COUNT = 5;

const User = db.define("users", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});

// instance methods
User.prototype.correctPassword = function (candidatePassword) {
  // should return true or false for if the entered password matches
  bcrypt.compare(candidatePassword, this.password);
};

User.prototype.generateToken = function () {
  // should sign a JWT token from an environment variable
  return jwt.sign({ id: this.id }, process.env.JWT);
};

// class methods
User.authenticate = async function ({ username, password }) {
  // this should find a user with the given username and determine if the password is valid for them
  const user = await this.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  } else {
    return user.generateToken();
  }
};

User.findByToken = async function (token) {
  // verify the id on the token and find the corresponding user, otherwise throw an error
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id);
    if (!user) {
      throw "nooo";
    }
    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

// hooks
async function hashPassword(user) {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
}

module.exports = User;
