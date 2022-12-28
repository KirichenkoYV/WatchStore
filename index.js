/* eslint-disable no-console */
require('dotenv').config();
require('@babel/register');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const db = require('./db/models');
const indexRouter = require('./routes/index');
const regAdmin = require('./routes/regAdmin');

const app = express();
const PORT = 3000;

const ssr = require('./middleware/ssr');
const getform = require('./routes/getformsRouter');
// абсолютный путь до папки со статическими файлами
const staticDir = path.join(__dirname, 'public');

// прочесть тело запросов в формате urlencoded -> req.body
app.use(express.urlencoded({ extended: true }));
// прочесть тело запросов в формате JSON -> req.body
app.use(express.json());
// раздать статические файлы — изображения, стили, клиентские скрипты, etc.
app.use(express.static(staticDir));
app.use(ssr);
// подключение loggera
app.use(logger('dev'));

app.use('/', indexRouter);

app.use('/admin', regAdmin);

app.use('/', getform);

app
  .listen(PORT)
  .on('error', (error) => {
    console.error('Ошибка при запуске веб-сервера');
    console.error(error.message);
  })
  .on('listening', async () => {
    console.log('Веб-сервер слушает порт,', PORT);
    try {
      await db.sequelize.authenticate({ logging: false });
      console.log('БД подключена успешно');
    } catch (error) {
      console.error('Ошибка подключения БД');
      console.error(error.message);
    }
  });
