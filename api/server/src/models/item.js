'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    option: DataTypes.TEXT,
    id_product: DataTypes.INTEGER,
    id_order: DataTypes.INTEGER
  }, {});
  item.associate = function(models) {
    // associations can be defined here
  };
  return item;
};