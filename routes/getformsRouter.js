/* eslint-disable object-curly-newline */
const getform = require('express').Router();
const db = require('../db/models');
const newOrder = require('../Views/AddOrder');
const mailer = require('../nodemailer');

// getform.get('/neworder', (req, res) => {
//   res.renderComponent(newOrder);
// });

getform.post('/neworder', async (req, res) => {
  //   const { name } = req.body;
  const { name, email, phone, url } = req.body;
  try {
    const new1Order = await db.Order.create({
      name,
      email,
      phone,
      url,
    });
    const message = {
      from: 'InTime <hause_ru@mail.ru>',
      to: req.body.email,
      subject: 'Ваш заказ принят',
      text: 'Поздравляем! Вы успешно оставили заказ на уникальные часы ручной работы! В ближайшее время с Вами свяжется наш менеджер, для уточнения деталей. Данное письмо не требует ответа.',
    };
    mailer(message);
    res.locals.user = new1Order;
    // res.redirect('/neworder');
    res.end();
    // res.renderComponent();
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500);
  }
});

module.exports = getform;
