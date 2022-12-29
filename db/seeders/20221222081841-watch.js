// const path =
//   '/home/tema/Desktop/elbrus/Phase - 2/week 2/wednesday/watch-store/imageWatches';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const watches = [
      {
        title: 'Iconic Link DW',
        note: 'Laconic design with an extraordinary dial',
        imagePath:
          'https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/39eT0s5OiMHikPLfXxgyAr/cdafe2290cdd7c67c0b8a2509928b417/desk-gifts.jpg',
      },
      {
        title: 'Freelook FL',
        note: 'Textured dial with dashed indexes',
        imagePath:
          'https://file.hstatic.net/200000126361/collection/anh-bia-mop-collection-1600x600-1_bce6475601be4afeaee98fe66b1dcf6a.jpg',
      },
      {
        title: 'Mathey-Tissot D',
        note: 'Bracelet with folding clasp',
        imagePath:
          'https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/3HHsdm8zu3B1UhHYmPlVNB/33294083f6c3385964bb8b112eea56d5/2800x850_DWMOMENTS_ownweb_category_RAD_IN.jpg',
      },
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
