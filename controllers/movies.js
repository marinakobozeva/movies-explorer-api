const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const {
  CREATE_FILM_BAD_DATA,
  FILM_NOT_FOUND,
  FILM_DELETE_FORBIDDEN,
  BAD_ID,
} = require('../utils/messages');

module.exports.getMovies = (req, res, next) => {
  const ownerId = req.user._id;
  Movie.find({ owner: ownerId })
    .then((movies) => {
      res.send(movies);
    })
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => {
      res.send(movie);
    })
    .catch((err) => {
      let prettyErr = err;
      if (err.name === 'ValidationError') {
        prettyErr = new BadRequestError(CREATE_FILM_BAD_DATA);
      }
      next(prettyErr);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  const movieId = req.params._id;
  Movie.findById(movieId)
    .then((movie) => {
      if (movie === null) {
        throw new NotFoundError(FILM_NOT_FOUND);
      } else if (!movie.owner.equals(req.user._id)) {
        throw new ForbiddenError(FILM_DELETE_FORBIDDEN);
      }
      return movie;
    })
    .then((movie) => movie.delete())
    .then((data) => res.send(data))
    .catch((err) => {
      let prettyErr = err;
      if (err.name === 'CastError') {
        prettyErr = new BadRequestError(BAD_ID);
      }
      next(prettyErr);
    });
};
