const mongoose = require('mongoose');
const validator = require('validator');
const { BAD_URL } = require('../utils/messages');

const movieSchema = new mongoose.Schema({
  country: {
    required: true,
    type: String,
  },
  director: {
    required: true,
    type: String,
  },
  duration: {
    required: true,
    type: Number,
  },
  year: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  image: {
    validate: {
      validator(valid) {
        return validator.isURL(valid);
      },
      message: BAD_URL,
    },
    required: true,
    type: String,
  },
  trailerLink: {
    validate: {
      validator(valid) {
        return validator.isURL(valid);
      },
      message: BAD_URL,
    },
    required: true,
    type: String,
  },
  thumbnail: {
    validate: {
      validator(valid) {
        return validator.isURL(valid);
      },
      message: BAD_URL,
    },
    required: true,
    type: String,
  },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  movieId: {
    required: true,
    type: Number,
  },
  nameRU: {
    required: true,
    type: String,
  },
  nameEN: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('movie', movieSchema);
