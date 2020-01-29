'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('products', 
  [
    {
      name: "Queijo",
      price: 1,
      type: "additional",
      bf: false,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name: "Ovo",
      price: 1,
      type: "additional",
      bf: false,
      createdAt : new Date(),
      updatedAt : new Date()
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};
