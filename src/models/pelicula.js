'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pelicula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pelicula.belongsTo(models.Usuario)
      Pelicula.belongsToMany(models.Personaje, {through:'PersonajePeliculas'})
      Pelicula.belongsToMany(models.Genero, {through:'PeliculaGeneros'})
    }
  }
  Pelicula.init({
    imagen: DataTypes.STRING,
    titulo: DataTypes.STRING,
    fecha: DataTypes.DATE,
    calificacion: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'Pelicula',
  });
  return Pelicula;
};