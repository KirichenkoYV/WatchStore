const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
    // eslint-disable-next-line no-unused-vars
    static associate(models) {}
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    titleWatch: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    urlWatch: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
  const options = {
    sequelize,
    modelName: 'Catalog',
    tableName: 'Catalogs',
  };
  Catalog.init(attributes, options);
  return Catalog;
};
