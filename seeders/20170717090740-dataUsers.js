'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: 'patrick',
      password: '1234',
      role: 'student',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username: 'achim',
      password: '1234',
      role: 'teachers',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username: 'sukmo',
      password: '1234',
      role: 'teachers',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username: 'renata',
      password: '1234',
      role: 'student',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
