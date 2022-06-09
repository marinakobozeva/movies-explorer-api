const { NODE_ENV, JWT_SECRET, DB } = process.env;

const SECRET_KEY = NODE_ENV === 'production' ? JWT_SECRET : 'E4t%y&ui*k';
const DB_LINK = NODE_ENV === 'production' ? DB : 'mongodb://localhost:27017/moviesdb';

module.exports = {
  SECRET_KEY,
  DB_LINK,
};
