const moviesRouter = require('express').Router();
const { validateCreateMovie, validateDeleteMovie } = require('../middlewares/validation');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', getMovies);

moviesRouter.post('/', validateCreateMovie, createMovie);

moviesRouter.delete('/:_id', validateDeleteMovie, deleteMovie);

module.exports = moviesRouter;
