const cabinetAdmin = require('express').Router();
const { Order, Watch, Catalog } = require('../db/models');
const CabinetAdmin = require('../Views/CabinetAdmin');

cabinetAdmin.get('/cabinetAdmin', async (req, res) => {
  const orders = await Order.findAll();
  const carousel = await Watch.findAll();
  const catalog = await Catalog.findAll();
  res.renderComponent(CabinetAdmin, { orders, carousel, catalog });
});

// eslint-disable-next-line consistent-return
cabinetAdmin.post('/cabinetCarousel', async (req, res) => {
  const { title, note, imagePath } = req.body;
  try {
    const new1Order = await Watch.create({
      title,
      note,
      imagePath,
    });
    new1Order.save();
    res.redirect('/cabinetAdmin');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
    res.sendStatus(500);
  }
});

cabinetAdmin.post('/cabinetAdmin', async (req, res) => {
  const { titleWatch, urlWatch } = req.body;
  try {
    const new1Order = await Catalog.create({
      titleWatch,
      urlWatch,
    });
    new1Order.save();
    return res.redirect('/cabinetAdmin');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
    res.sendStatus(500);
  }
});

module.exports = cabinetAdmin;
