/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [{ login: 'admin', password: '123456' }];
    return queryInterface.bulkInsert(
      'Users',
      users.map((el) => ({
        login: el.login,
        password: el.password,

        createdAt: new Date(),
        updatedAt: new Date(),

      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
