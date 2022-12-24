const adminRouter = require('express').Router();
const React = require('react');
const WatchList = require('../Views/WatchList');
const { Watch } = require('../db/models');

adminRouter.get('/', async (req, res) => {
  try {
    const watchList = await Watch.findAll();
    // console.log(watchList[2].dataValues.note);
    res.renderComponent(WatchList, { watchList });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
  res.end();
});

module.exports = adminRouter;
