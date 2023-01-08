const plusOrder = require('express').Router();
// const { Order } = require('../db/models');
const addOrder = require('../Views/AddOrder');

plusOrder.get('/neworder', (req, res) => {
  res.renderComponent(addOrder);
});

module.exports = plusOrder;
