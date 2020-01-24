'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    type: DataTypes.TEXT,
    breakfast: DataTypes.BOOLEAN
  }, {});
  products.associate = function(models) {
    products.hasMany(models.items)
    // associations can be defined here
  };
  return products;
};