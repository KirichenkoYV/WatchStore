/* eslint-disable no-console */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const Registration = require('../Views/Registration');
const db = require('../db/models');

router.get('/', (req, res) => {
  res.renderComponent(Registration);
});

router.post('/', async (req, res) => {
  const hasLogin = Boolean(req.body.login);
  const hasPassword = Boolean(req.body.password);

  if (!hasLogin || !hasPassword) {
    res.status(400).json({
      error: 'Введите логин и пароль',
    });
    return;
  }
  let user;
  try {
    user = await db.User.findOne({
      where: {
        login: req.body.login,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
  if (!user) {
    res
      .status(400)
      .json({ error: 'Нет пользователя с таким логином или паролем' });
    return;
  }

  const rawPassword = req.body.password; // пароль введенный админом в инпут

  const dataBasePassword = user.password; // хэшированный пароль, ранее внесенный в БД
  let isSame;
  try {
    // проверка бикриптом сырого пароля и пароля из базы данных
    isSame = await bcrypt.compare(rawPassword, dataBasePassword);
  } catch (error) {
    console.log(error.message);
  }

  if (!isSame) {
    res
      .status(400)
      .json({ error: 'Нет пользователя с таким логином или паролем' });
    return;
  }
  req.session.userId = user.id;
  res.redirect('/cabinetAdmin');
});

module.exports = router;
