'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Profiles', // table name
      'UserId', // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Users', key: 'id'}
      },
    )
  },

   down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Profiles', 'UserId')
  }
};
