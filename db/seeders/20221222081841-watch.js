const path = '/home/tema/Desktop/elbrus/Phase - 2/week 2/wednesday/watch-store/imageWatches';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const watches = [
      { title: 'Макет часов 1', note: 'Кварцевые часы. Водостойкость WR 30.', imagePath: `${path}/1.jpg` },
      { title: 'Макет часов 2', note: 'Механические часы с автоподзаводом. Запас хода 48 часов.', imagePath: `${path}/2.jpg` },
      { title: 'Макет часов 3', note: 'Мужские механические часы с автоподзаводом. Циферблат черного и серого цвета со светящимися часовыми метками и арабскими цифрами.', imagePath: `${path}/3.jpg` },
      { title: 'Макет часов 4', note: 'Механические часы с автоподзаводом. Водостойкость WR 30. Часы, минуты. Турбийон. ', imagePath: `${path}/4.jpg` },
      { title: 'Макет часов 5', note: 'Механические часы с ручным заводом.Сапфировое стекло. Прозрачная задняя крышка.', imagePath: `${path}/5.jpg` },
    ];
    return queryInterface.bulkInsert(
      'Watches',
      watches.map((el) => ({
        title: el.title,
        note: el.note,
        imagePath: el.imagePath,
        createdAt: new Date(),
        updatedAt: new Date(),

      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Watches', null, {});
  },
};
