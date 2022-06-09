const usersRouter = require('express').Router();
const { validateUpdateUser } = require('../middlewares/validation');
const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

usersRouter.get('/me', getUserInfo);

usersRouter.patch('/me', validateUpdateUser, updateUserInfo);

module.exports = usersRouter;
