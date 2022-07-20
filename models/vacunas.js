'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacunas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vacunas.init({
    id_vacuna: {type: DataTypes.INTEGER, primaryKey: true},
    nombre: DataTypes.STRING,
    fecha: DataTypes.DATE,
    id_mascota: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vacunas',
  });
  return Vacunas;
};