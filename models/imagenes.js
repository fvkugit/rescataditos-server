'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagenes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Imagenes.init({
    id_imagen: {type: DataTypes.INTEGER, primaryKey: true},
    imagen: DataTypes.STRING,
    id_mascota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'imagenes',
  });
  return Imagenes;
};