const { celebrate, Joi } = require('celebrate');

const URL_PATTERN = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/;
const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(URL_PATTERN),
    trailerLink: Joi.string().required().pattern(URL_PATTERN),
    thumbnail: Joi.string().required().pattern(URL_PATTERN),
    movieId: Joi.number().integer().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().required().alphanum().length(24)
      .hex(),
  }),
});

const validateGetUser = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24).hex(),
  }),
});

const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email(),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().min(3).required().email(),
    password: Joi.string().required(),
  }),
});

const validateRegister = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().min(3).required().email(),
    password: Joi.string().required(),
  }),
});

module.exports = {
  validateCreateMovie,
  validateDeleteMovie,
  validateGetUser,
  validateUpdateUser,
  validateLogin,
  validateRegister,
};
