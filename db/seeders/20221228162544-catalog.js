module.exports = {
  async up(queryInterface, Sequelize) {
    const catalogWatches = [
      {
        titleWatch: 'Corum Admiral',
        urlWatch:
          'https://www.alltime.ru/obj/catalog/watch/daniel-wellington/img/big/DW00100474.jpg',
      },
      {
        titleWatch: 'Iconic Link',
        urlWatch:
          'https://www.alltime.ru/obj/catalog/watch/daniel-wellington/img/big/DW00100208.jpg',
      },
      {
        titleWatch: 'Raymond Weil',
        urlWatch:
          'https://316.watch/upload/iblock/7f2/5yiq9narttmnvrlzbotxsi60jpug8mib.jpg',
      },
      {
        titleWatch: 'BVLGARI Octo Roma',
        urlWatch:
          'https://316.watch/upload/iblock/fcb/oe0nc4e3p871lnsiv9jkz11xr1smy6dj.png',
      },
      {
        titleWatch: 'For Owls',
        urlWatch:
          'https://avatars.mds.yandex.net/get-mpic/5031495/img_id7570608703599835921.jpeg/orig',
      },
      {
        titleWatch: 'Petite Ashfield',
        urlWatch:
          'https://www.alltime.ru/obj/catalog/watch/daniel-wellington/img/big/DW00100245.jpg',
      },
      {
        titleWatch: 'For Yura',
        urlWatch:
          'https://www.alltime.ru/obj/catalog/watch/armin-strom/img/big/RG17-RF-90-AL-L-40.jpg',
      },
      {
        titleWatch: 'For Edik',
        urlWatch:
          'https://www.alltime.ru/obj/catalog/watch/doodle/img/big/DO32009.jpg',
      },
      {
        titleWatch: 'For Lena',
        urlWatch:
          'https://www.alltime.ru/obj/catalog/watch/doodle/img/big/DO32014.jpg',
      },
    ];
    return queryInterface.bulkInsert(
      'Catalogs',
      catalogWatches.map((el) => ({
        titleWatch: el.titleWatch,
        urlWatch: el.urlWatch,
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
