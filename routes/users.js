/* eslint-disable no-useless-escape */

const { celebrate, Joi } = require('celebrate');
const usersRouter = require('express').Router();
const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

usersRouter.get('/me', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24).hex(),
  }),
}), getUserInfo);

usersRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email(),
  }),
}), updateUserInfo);

module.exports = usersRouter;
