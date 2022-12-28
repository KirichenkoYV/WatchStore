/* eslint-disable no-console */
const router = require('express').Router();
const React = require('react');
const WatchList = require('../Views/WatchList');
const NewContentPage = require('../Views/NewContentPage');
const { Watch } = require('../db/models');
const WatchCreatedPage = require('../Views/WatchCreatedPage');

router.get('/', async (req, res) => {
  try {
    const watchList = await Watch.findAll({
      order: [
        ['createdAt', 'DESC'],
        ['id', 'DESC'],
      ],
    });
    // console.log(watchList[2].dataValues.note);
    res.renderComponent(WatchList, { watchList });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
  res.end();
});

router.get('/add-new-content', async (req, res) => {
  try {
    res.renderComponent(NewContentPage);
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
  res.end();
});

// POST /
router.post('/add-new-content', async (req, res) => {
  const watch = await Watch.create(req.body);
  res.renderComponent(WatchCreatedPage, { watch });
  return;
  // res.locals.title = 'Добавить часы';

  // if (!req.body || !req.body.body) {
  //   res.locals.error = 'У заметки должен быть текст';
  //   res.status(400);
  //   res.renderComponent(NewContentPage);
  //   return;
  // }

  // try {
  //   res.locals.data = await db.Note.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     userId: req.session.userId || undefined,
  //   });
  //   // res.redirect('/notes'); // <- вариант 0: полная перезагрузка страницы! не устраивает
  //   // res.json(res.locals); // вариант 1: отправить JSON
  //   // ИЛИ вариант 2: отправить HTML
  //   res.renderComponent(
  //     NoteListItem,
  //     { note: res.locals.data },
  //     { doctype: false },
  //   );
  // } catch (error) {
  //   res.locals.error = error.message;
  //   res.status(500);
  //   res.renderComponent(NoteListPage);
  // }
});

router.post('/remove-watch', async (req, res) => {
  await Watch.destroy({ where: { id: Number(req.body.id) } });
  res.redirect('/admin');
});

module.exports = router;
