'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genero.belongsTo(models.Usuario)
      Genero.belongsToMany(models.Pelicula, {through:'PeliculaGeneros'})
    }
  }
  Genero.init({
    nombre: DataTypes.STRING,
    edad: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'Genero',
  });
  return Genero;
};