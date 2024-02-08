'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MPPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MPPhoto.init({
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MPPhoto',
  });
  return MPPhoto;
};