const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    const rawPassword = '123456';
    const hashedPassword = await bcrypt.hash(rawPassword, 10);
    const users = [{ login: 'admin', password: hashedPassword }];
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
