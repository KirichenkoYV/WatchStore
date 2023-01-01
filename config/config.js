const logger = require('morgan');
const express = require('express');
const ssr = require('../middleware/ssr');

const config = (app) => {
  // подключение loggera
  app.use(logger('dev'));
  // прочесть тело запросов в формате JSON -> req.body
  app.use(express.json());
  // прочесть тело запросов в формате urlencoded -> req.body
  app.use(express.urlencoded({ extended: true }));
  // подкоючение ssr
  app.use(ssr);
};

module.exports = config;
