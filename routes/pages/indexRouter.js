const router = require('express').Router();
const { Watch } = require('../../db/models');
const HomePage = require('../../Views/HomePage');

router.get('/', async (req, res) => {
  const watches = await Watch.findAll();
  res.renderComponent(HomePage, { watches });
});

module.exports = router;
