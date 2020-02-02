'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('products',    
  [
      {
        name: "Café Americano",
        price: 5,
        type: "primary",
        bf: true,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Café com Leite",
        price: 7,
        type: "primary",
        bf: true,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Misto Quente",
        price: 10,
        type: "primaty",
        bf: false,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Suco de Fruta Natural",
        price: 7,
        type: "primary",
        bf: true,
        createdAt : new Date(),
        updatedAt : new Date()
      },
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
      {
        name: "Batata Frita",
        price: 5,
        type: "sideDish",
        bf: false,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Anéis de Cebola",
        price: 5,
        type: "sideDish",
        bf: false,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Água 500ml",
        price: 5,
        type: "drinks",
        bf: false,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Água 750ml",
        price: 7,
        type: "drinks",
        bf: false,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Refrigerante 500ml",
        price: 7,
        type: "drinks",
        bf: false,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Refrigerante 750ml",
        price: 10,
        type: "drinks",
        bf: false,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ], {}),

    down: (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};
