'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  
  class Mascotas extends Model {
    static associate(models) {
      Mascotas.hasMany(models.imagenes, {foreignKey: 'id_mascota'})
      Mascotas.hasMany(models.vacunas, {foreignKey: 'id_mascota'})
    }
  }
  Mascotas.init({
    id_mascota: {type:DataTypes.INTEGER,primaryKey: true},
    nombre: DataTypes.STRING,
    raza: DataTypes.STRING,
    color: DataTypes.STRING,
    tamanio: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mascotas',
  });

  return Mascotas;
};