'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      option: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      id_product: {
        type: Sequelize.INTEGER,
        references: {model: 'products', key: 'id'}
      },

      id_order: {
        type: Sequelize.INTEGER,
        references: {model: 'orders', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('items');
  }
};