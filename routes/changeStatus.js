const router = require('express').Router();
const { Order } = require('../db/models');

router.put('/', async (req, res) => {
  try {
    const order = await Order.findOne({ where: { id: req.body.id } });
    const { status } = req.body;
    if (!status) {
      return res.end();
    }
    order.status = status;
    order.save();
    return res.sendStatus(200);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
