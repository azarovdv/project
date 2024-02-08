const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PhotoAnimal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
    }
  }
  PhotoAnimal.init({
    animalId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PhotoAnimal',
  });
  return PhotoAnimal;
};
