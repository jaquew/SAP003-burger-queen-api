'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10,2),
    type: DataTypes.TEXT,
    breakfast: DataTypes.BOOLEAN
  }, {});
  product.associate = function(models) {
    product.hasMany(models.item)
    // associations can be defined here
  };
  return product;
};