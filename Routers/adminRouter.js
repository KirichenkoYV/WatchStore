const db = require('../db/models');
const router = require('express').Router();
const WatchListItem = require('../Views/WatchListItem');
const WatchListPage = require('../Views/WatchListPage');

router.get('/', async (req, res) => {
  res.locals.title = 'Каталог часов';

  try {
    res.locals.data = await db.Watch.list();
  } catch (error) {
    res.locals.error = error.message;
    res.status(500);
  }

  res.renderComponent(WatchListPage);
});

router.post('/', async (req, res) => {
  res.locals.title = 'Добавить часы';

  if (!req.body || !req.body.body) {
    res.locals.error = 'У описания должен быть текст';
    res.status(400);
    res.renderComponent(WatchListPage);
    return;
  }

  try {
    res.locals.data = await db.Watch.create({
      title: req.body.title,
      body: req.body.body,
    });
    // res.redirect('/notes'); // <- вариант 0: полная перезагрузка страницы! не устраивает
    // res.json(res.locals); // вариант 1: отправить JSON
    // ИЛИ вариант 2: отправить HTML
    res.renderComponent(
      WatchListItem,
      { data: res.locals.data },
      { doctype: false },
    );
  } catch (error) {
    res.locals.error = error.message;
    res.status(500);
    res.renderComponent(WatchListPage);
  }
});

router.delete('/:id', async (req, res) => {
  res.locals.title = `Удалить часы №${req.params.id}`;

  try {
    await db.Watch.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
