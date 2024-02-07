const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Animal }) {
      this.belongsToMany(Animal, { through: 'PhotoAnimal' });
    }
  }
  Photo.init({
    path: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};
