'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    [
      {
        name: "Hamburguer Simples",
        price: 10,
        type: "primary",
        bf: false,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Hamburguer Duplo",
        price: 15,
        type: "primary",
        bf: false,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ], {}
    ),
  }
};
