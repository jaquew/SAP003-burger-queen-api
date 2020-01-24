'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    status: DataTypes.STRING,
    mesa: DataTypes.INTEGER,
    items: DataTypes.JSON,
    total: DataTypes.INTEGER
  }, {});
  orders.associate = function(models) {
    orders.hasMany(models.items)
    // associations can be defined here
  };
  return orders;
};