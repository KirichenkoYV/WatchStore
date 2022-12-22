require('dotenv').config();
require('@babel/register');
const path = require('path');
const express = require('express');
const logger = require('morgan');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Watch } = require('./db/models');
const db = require('./db/models');
const Layout = require('./Views/Layout');

const app = express();
const PORT = 3000;

const ssr = require('./middleware/ssr');
const HomePage = require('./Views/HomePage');
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

app.get('/', async (req, res) => {
  const watches = await Watch.findAll();
  res.renderComponent(HomePage, { watches });
});

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
