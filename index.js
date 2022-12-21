require('dotenv').config();
require('@babel/register');

const express = require('express');
const db = require('./db/models');

const app = express();
const PORT = 3000;

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
