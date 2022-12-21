require('dotenv').config();
require('@babel/register');
const path = require('path');
const express = require('express');

const app = express();

const db = require('./db/models');
const ssr = require('./middleware/ssr');
// абсолютный путь до папки со статическими файлами
const staticDir = path.join(__dirname, 'public');

// прочесть тело запросов в формате urlencoded -> req.body
app.use(express.urlencoded({ extended: true }));
// прочесть тело запросов в формате JSON -> req.body
app.use(express.json());
// раздать статические файлы — изображения, стили, клиентские скрипты, etc.
app.use(express.static(staticDir));

app.use(ssr);
app.listen(3000);
