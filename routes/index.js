const router = require('express').Router();
const { Watch, Catalog } = require('../db/models');
const AddOrder = require('../Views/AddOrder');
const HomePage = require('../Views/HomePage');

router.get('/', async (req, res) => {
  const watches = await Watch.findAll();
  const watchesCatalog = await Catalog.findAll();
  res.renderComponent(HomePage, { watches, watchesCatalog });
});
router.get('/neworder', async (req, res) => {
  const watches = await Watch.findAll();
  res.renderComponent(AddOrder, { watches });
});

module.exports = router;
