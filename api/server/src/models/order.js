'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    status: DataTypes.STRING,
    mesa: DataTypes.INTEGER,
    items: DataTypes.JSON,
    total: DataTypes.DECIMAL(10,2)
  }, {});
  order.associate = function(models) {
    order.hasMany(models.items)
    // associations can be defined here
  };
  return order;
};