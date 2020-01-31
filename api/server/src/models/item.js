'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    option: DataTypes.STRING,
    additionalId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {});
  item.associate = function(models) {
    item.belongsTo(models.product)
    item.belongsTo(models.order)
  };
  return item;
};