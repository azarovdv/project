const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Type, Photo }) {
      this.belongsTo(Type, { foreignKey: 'typeId' });
      this.belongsToMany(Photo, { through: 'PhotoAnimal' });
    }
  }
  Animal.init({
    name: DataTypes.STRING,
    body: DataTypes.TEXT,
    typeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};
