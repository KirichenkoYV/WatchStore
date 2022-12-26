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
    // console.log(user);
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

  const rawPassword = req.body.password;
  const hashedPassword = user.password;
  // const isSame = await bcrypt.compare(rawPassword, hashedPassword);
  if (rawPassword !== hashedPassword) {
    res
      .status(400)
      .json({ error: 'Нет пользователя с таким логином или паролем' });
    return;
  }
  // req.session.userId = user.id;
  // res.redirect('/');
  res.send('привет админ');
});

module.exports = router;
