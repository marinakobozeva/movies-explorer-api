require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const router = require('./routes/index');
const errorsHandler = require('./middlewares/errorsHandler');
const rateLimit = require('./utils/rateLimit');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { DB_LINK } = require('./utils/constants');

const app = express();
const { PORT = 3000 } = process.env;

app.listen(PORT);

mongoose.connect(DB_LINK, {});

app.use(helmet());
app.use(rateLimit);

app.use(requestLogger);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.use(errorLogger);
app.use(errors());

app.use(errorsHandler);
