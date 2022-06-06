/* eslint-disable no-useless-escape */

// const { celebrate, Joi } = require('celebrate');
const usersRouter = require('express').Router();
const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

usersRouter.get('/me', getUserInfo);

usersRouter.patch('/me', updateUserInfo);

module.exports = usersRouter;
