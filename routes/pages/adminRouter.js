const adminRouter = require('express').Router();
const AdminPage = require('../../Views/AdminPage');
const { Watch } = require('../../db/models');
const WatchPage = require('../../Views/WatchPage');
const CreateWatchPage = require('../../Views/CreateWatchPage');

adminRouter.get('/', async (req, res) => {
  try {
    const watchList = await Watch.findAll({
      order: [
        ['createdAt', 'DESC'],
        ['id', 'DESC'],
      ],
    });
    res.renderComponent(AdminPage, { watchList });
    // res.json(watchList);
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
  res.end();
});

adminRouter.get('/new', async (req, res) => {
  res.renderComponent(CreateWatchPage);
});

adminRouter.get('/:id', async (req, res) => {
  const watch = await Watch.findByPk(req.params.id);
  res.renderComponent(WatchPage, { watch });
  // res.json(watch);
});

// POST /
adminRouter.post('/post', async (req, res) => {
  const watch = await Watch.create(req.body);
  // res.renderComponent(WatchList, { watch });
  res.redirect('/admin');
  // res.json(watch);
});

adminRouter.post('/:id/put', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await Watch.update(data, {
    where: { id: Number(id) },
  });
  res.redirect('/admin');
  // res.json({ success: true });
});

adminRouter.post('/:id/delete', async (req, res) => {
  const { id } = req.params;
  await Watch.destroy({ where: { id: Number(id) } });
  res.redirect('/admin');
  // res.json({ success: true });
});

module.exports = adminRouter;
