const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const BadRequestError = require('../errors/BadRequestError');
const ConflictError = require('../errors/ConflictError');
const NotFoundError = require('../errors/NotFoundError');
const { SECRET_KEY } = require('../utils/constants');
const {
  CREATE_USER_BAD_DATA,
  UPDATE_USER_BAD_DATA,
  REGISTER_DUPLICATE_EMAIL,
  UPDATE_DUPLICATE_EMAIL,
  USER_NOT_FOUND,
  BAD_ID,
} = require('../utils/messages');

// const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.createUser = (req, res, next) => {
  const {
    name,
    email,
    password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then((user) => {
      res.send({
        name: user.name, email: user.email, _id: user._id,
      });
    })
    .catch((err) => {
      let prettyErr = err;
      if (err.name === 'ValidationError') {
        prettyErr = new BadRequestError(CREATE_USER_BAD_DATA);
      } else if (err.code === 11000) {
        prettyErr = new ConflictError(REGISTER_DUPLICATE_EMAIL);
      }
      next(prettyErr);
    });
};

module.exports.updateUserInfo = (req, res, next) => {
  const { name, email } = req.body;
  const userId = req.user._id;
  User.findOneAndUpdate({ _id: userId }, { name, email }, { new: true, runValidators: true })
    .then((user) => {
      if (user === null) {
        throw new NotFoundError(USER_NOT_FOUND);
      } else {
        res.send(user);
      }
    })
    .catch((err) => {
      let prettyErr = err;
      if (err.name === 'ValidationError') {
        prettyErr = new BadRequestError(UPDATE_USER_BAD_DATA);
      } else if (err.code === 11000) {
        prettyErr = new ConflictError(UPDATE_DUPLICATE_EMAIL);
      }
      next(prettyErr);
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials({ email, password })
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        SECRET_KEY,
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.getUserInfo = (req, res, next) => {
  const { _id } = req.user;
  User.findById(_id)
    .then((user) => {
      if (user === null) {
        throw new NotFoundError(USER_NOT_FOUND);
      } else {
        res.send(user);
      }
    })
    .catch((err) => {
      let prettyErr = err;
      if (err.name === 'CastError') {
        prettyErr = new BadRequestError(BAD_ID);
      }
      next(prettyErr);
    });
};
