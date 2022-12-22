const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Watch extends Model {
    static associate(models) {}
  }
  const attributes = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagePath: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    modelName: 'Watch',
    tableName: 'Watches',
  };

  Watch.init(attributes, options);
  return Watch;
};
