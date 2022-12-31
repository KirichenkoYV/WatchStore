const ReactDOMServer = require('react-dom/server');
const React = require('react');
const router = require('express').Router();

const { Order } = require('../db/models');

router.post('/', async (req, res) => {
  const { name, email, phone, url } = req.body;
  try {
    const newOrder = await Order.create({
      name,
      email,
      phone,
      url,
    });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
