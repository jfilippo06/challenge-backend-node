'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Personaje.belongsTo(models.Usuario)
      Personaje.belongsToMany(models.Pelicula, {through:'PersonajePeliculas'})
    }
  }
  Personaje.init({
    imagen: DataTypes.STRING,
    nombre: DataTypes.STRING,
    edad: DataTypes.NUMBER,
    peso: DataTypes.STRING,
    historia: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Personaje',
  });
  return Personaje;
};