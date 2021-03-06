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
        type: Sequelize.STRING
      },
      additionalId:{
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {model: 'products', key: 'id'}
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'products', key: 'id'}
      },
      orderId: {
        allowNull: false,
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