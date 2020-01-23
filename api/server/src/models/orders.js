
'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    status: DataTypes.STRING,
    items: DataTypes.JSON
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};