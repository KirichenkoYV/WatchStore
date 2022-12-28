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

// router.post('/', async (req, res) => {
//   //   const { name } = req.body;
//   console.log(req.body);
//   const {
//     name, email, phone, url,
//   } = req.body;
//   try {
//     const newOrder = await Order.create({
//       name,
//       email,
//       phone,
//       url,
//     });
//     console.log(req.body);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// router.post('/', async (req, res) => {
//   const { name, email, phone, url } = req.body;
//   console.log(req.body);
//   if (!name || !email || !phone || !url) {
//     res.status(400).json({
//       error: 'Введите логин и пароль',
//     });
//     return;
//   }

//   try {
//     const newOrder = await Order.create({
//       name,
//       email,
//       phone,
//       url,
//     });
//     res.redirect('/');
//     return;
//   } catch (error) {
//     res.sendStatus(500);
//   }
// });

module.exports = router;
