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
    }
  }
  Genero.init({
    nombre: DataTypes.STRING,
    edad: DataTypes.NUMBER,
    usuarioId: DataTypes.NUMBER,
    personajeId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Genero',
  });
  return Genero;
};