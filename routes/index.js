const router = require('express').Router();
const { login, createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { validateLogin, validateRegister } = require('../middlewares/validation');
const NotFoundError = require('../errors/NotFoundError');
const userRouter = require('./users');
const movieRouter = require('./movies');
const { NOT_FOUND_URL } = require('../utils/messages');

router.post('/signin', validateLogin, login);
router.post('/signup', validateRegister, createUser);

router.use(auth);

router.use('/users', userRouter);
router.use('/movies', movieRouter);
router.use((req, res, next) => {
  next(new NotFoundError(NOT_FOUND_URL));
});

module.exports = router;
