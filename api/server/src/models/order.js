'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    status: DataTypes.STRING,
    mesa: DataTypes.INTEGER,
    clientName: DataTypes.TEXT,
  }, {});
  order.associate = function(models) {
    order.hasMany(models.item)
    // associations can be defined here
  };
  return order;
};