const path = '/home/tema/Desktop/elbrus/Phase - 2/week 2/wednesday/watch-store/imageWatches';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const watches = [
      { title: 'Макет часов 1', note: 'Кварцевые часы. Водостойкость WR 30.', imagePath: 'https://www.bestwatch.ru/bigimage/Sturmanskie/9015-1271570.jpg' },
      { title: 'Макет часов 2', note: 'Механические часы с автоподзаводом. Запас хода 48 часов.', imagePath: 'https://www.bestwatch.ru/bigimage/Obaku/V267GXCBMC.jpg' },
      { title: 'Макет часов 3', note: 'Мужские механические часы с автоподзаводом. Циферблат черного и серого цвета со светящимися часовыми метками и арабскими цифрами.', imagePath: 'https://www.bestwatch.ru/bigimage/seiko/SRPD07J1.jpg' },
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
