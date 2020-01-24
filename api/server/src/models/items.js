'use strict';
module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    option: DataTypes.TEXT,
    id_product: DataTypes.INTEGER,
    id_order: DataTypes.INTEGER
  }, {});
  items.associate = function(models) {
  
    // associations can be defined here
  };
  return items;
};