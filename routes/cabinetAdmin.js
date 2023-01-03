const cabinetAdmin = require('express').Router();
const { Order, Watch, Catalog } = require('../db/models');
const CabinetAdmin = require('../Views/CabinetAdmin');
const CarouselAdmin = require('../Views/CarouselAdmin');

cabinetAdmin.get('/cabinetAdmin', async (req, res) => {
  const orders = await Order.findAll();
  const carousel = await Watch.findAll();
  const catalog = await Catalog.findAll();

  if (req.session.userId) {
    res.renderComponent(CabinetAdmin, { orders, carousel, catalog });
  } else {
    res.status(400)
      .json({ error: 'необходимо зарегистрироваться как администратор' });
  }
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
    const table = await Watch.findAll();
    res.renderComponent(CarouselAdmin, { el: new1Order, i: table.length - 1 });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
    res.sendStatus(500);
  }
});

cabinetAdmin.post('/cabinet', async (req, res) => {
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

cabinetAdmin.get('/cabinetAdmin/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res.clearCookie('admin_sid');
    // json({ message: 'Успешный выход' });
    res.redirect('/');
  });
});

module.exports = cabinetAdmin;
