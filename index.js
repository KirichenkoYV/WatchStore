/* eslint-disable no-console */
require('dotenv').config();
require('@babel/register');

const express = require('express');
const session = require('express-session');
const path = require('path');
const FileStore = require('session-file-store')(session); // хранилище для куков сессии
const db = require('./db/models');
const indexRouter = require('./routes/index');
const regAdmin = require('./routes/regAdmin');
const cabinet = require('./routes/cabinetAdmin');
const config = require('./config/config');
const getform = require('./routes/getformsRouter');
// абсолютный путь до папки со статическими файлами
const staticDir = path.join(__dirname, 'public');
// раздать статические файлы — изображения, стили, клиентские скрипты, etc.

const sessionConfig = {
  store: new FileStore(),
  name: 'admin_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

const app = express();
const PORT = 3000;
config(app);

// обработчики запросов
app.use(express.static(staticDir));
app.use(session(sessionConfig));
app.use('/', indexRouter);
app.use('/admin', regAdmin);
app.use('/', getform);
app.use('/', cabinet);

// слушатель порта
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
