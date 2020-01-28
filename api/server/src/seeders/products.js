module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Products', 
    [
      {
        name: "Hamburguer Simples",
        price: 10,
        type: "primary",
        bf: false
      },
      {
        name: "Hamburguer Duplo",
        price: 15,
        type: "primary",
        bf: false
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Products', null, {}),
};