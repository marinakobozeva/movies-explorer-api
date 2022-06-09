const usersRouter = require('express').Router();
const { validateGetUser, validateUpdateUser } = require('../middlewares/validation');
const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

usersRouter.get('/me', validateGetUser, getUserInfo);

usersRouter.patch('/me', validateUpdateUser, updateUserInfo);

module.exports = usersRouter;
