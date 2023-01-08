/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line consistent-return
const cabinetAdmin = require('express').Router();
const { Order, Watch, Catalog } = require('../db/models');
const CabinetAdmin = require('../Views/CabinetAdmin');
const CarouselAdmin = require('../Views/CarouselAdmin');
const CatalogAdmin = require('../Views/CatalogAdmin');

cabinetAdmin.get('/cabinetAdmin', async (req, res) => {
  const orders = await Order.findAll();
  const carousel = await Watch.findAll();
  const catalog = await Catalog.findAll();

  if (req.session.userId) {
    res.renderComponent(CabinetAdmin, { orders, carousel, catalog });
  } else {
    res
      .status(400)
      .json({ error: 'необходимо зарегистрироваться как администратор' });
  }
});

cabinetAdmin.post('/cabinetCarousel', async (req, res) => {
  const { title, note, imagePath } = req.body;
  try {
    const new1Order = await Watch.create({
      title,
      note,
      imagePath,
    });
    const table = await Watch.findAll();
    res.renderComponent(
      CarouselAdmin,
      { el: new1Order, i: table.length - 1 },
      { doctype: false },
    );
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
    const table = await Catalog.findAll();
    res.renderComponent(
      CatalogAdmin,
      { el: new1Order, i: table.length - 1 },
      { doctype: false },
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error.message);
    res.sendStatus(500);
  }
});

cabinetAdmin.delete('/cabinetAdmin/:id', async (req, res) => {
  const { id } = req.params;
  const deleteWatch = await Watch.destroy({ where: { id } });

  res.json({ delete: true });
});

cabinetAdmin.delete('/cabinet/:id', async (req, res) => {
  const { id } = req.params;
  const deleteCatalog = await Catalog.destroy({ where: { id } });

  res.json({ delete: true });
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
