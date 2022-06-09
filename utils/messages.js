const CREATE_USER_BAD_DATA = 'Переданы некорректные данные при создании пользователя';
const UPDATE_USER_BAD_DATA = 'Переданы некорректные данные при обновлении пользователя';
const REGISTER_DUPLICATE_EMAIL = 'При регистрации указан email, который уже существует';
const UPDATE_DUPLICATE_EMAIL = 'При обновлении данных указан email, который уже существует';
const USER_NOT_FOUND = 'Пользователь по указанному _id не найден';

const BAD_ID = 'Передан некорректный формат id';

const CREATE_FILM_BAD_DATA = 'Переданы некорректные данные при добавлении фильма';
const FILM_NOT_FOUND = 'Фильм по указанному id не найден';
const FILM_DELETE_FORBIDDEN = 'Попытка удалить чужой фильм';

const AUTH_REQUIRED = 'Необходима авторизация';

const UNEXPECTED_ERROR = 'На сервере произошла ошибка';

const BAD_URL = 'Введён некорректный URL';
const BAD_EMAIL = 'Введён некорректный email';
const BAD_CREDS = 'Передан неверный логин или пароль';

const NOT_FOUND_URL = 'Указанный маршрут не найден';

module.exports = {
  CREATE_USER_BAD_DATA,
  UPDATE_USER_BAD_DATA,
  REGISTER_DUPLICATE_EMAIL,
  UPDATE_DUPLICATE_EMAIL,
  USER_NOT_FOUND,
  BAD_ID,
  CREATE_FILM_BAD_DATA,
  FILM_NOT_FOUND,
  FILM_DELETE_FORBIDDEN,
  AUTH_REQUIRED,
  UNEXPECTED_ERROR,
  BAD_URL,
  BAD_EMAIL,
  BAD_CREDS,
  NOT_FOUND_URL,
};
