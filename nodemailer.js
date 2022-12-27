const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'hause_ru@mail.ru',
    pass: 'WAV8GVr76KsHFHUcqTKx',
  },
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(message.err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;
