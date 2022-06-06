/* eslint-disable no-useless-escape */

// const { celebrate, Joi } = require('celebrate');
const moviesRouter = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', getMovies);

moviesRouter.post('/', createMovie);

moviesRouter.delete('/:_id', deleteMovie);

module.exports = moviesRouter;
