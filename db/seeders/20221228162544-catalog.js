module.exports = {
  async up(queryInterface, Sequelize) {
    const catalogWatches = [
      {
        titleWatch: 'CORUM ADMIRAL LEGEND CHRONOGRAPH A984/02193',
        urlWatch:
          'https://316.watch/upload/iblock/fe3/ksevqh9s4djhh0smfty63iopvf82pg2w.jpg',
      },
      {
        titleWatch: 'SEIKO PROSPEX SRPE29K1S',
        urlWatch:
          'https://316.watch/upload/iblock/901/bvui634m2paoijqiqslw99z925p0qllq.png',
      },
      {
        titleWatch: 'RAYMOND WEIL TANGO 8570-ST2-05207',
        urlWatch:
          'https://316.watch/upload/iblock/7f2/5yiq9narttmnvrlzbotxsi60jpug8mib.jpg',
      },
      {
        titleWatch: 'BVLGARI OCTO ROMA',
        urlWatch:
          'https://316.watch/upload/iblock/fcb/oe0nc4e3p871lnsiv9jkz11xr1smy6dj.png',
      },
      {
        titleWatch: 'Ball DM2118B-SCJ-BK',
        urlWatch:
          'https://316.watch/upload/iblock/413/4131da30d3fc6e365e72bf387621b2fd.jpg',
      },
      {
        titleWatch: 'Zenith PILOT TYPE 20',
        urlWatch:
          'https://316.watch/upload/iblock/692/ixnfjtrq2sd372mniqstjubahxxo0ac2.jpg',
      },
      {
        titleWatch: 'Guess GW0282G1',
        urlWatch: 'https://photo.watches.ru/123855/57541-n.jpg?ts=1613916155',
      },
      {
        titleWatch: 'Guess GW0058G4',
        urlWatch: 'https://photo.watches.ru/123746/57517-n.jpg?ts=1613916125',
      },
      {
        titleWatch: 'Tommy Hilfiger 1791905',
        urlWatch: 'https://photo.watches.ru/127876/62233-n.jpg?ts=1631419586',
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
