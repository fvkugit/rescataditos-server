"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("mascotas",
      [
        {
          id_mascota: 1,
          nombre: "Floppy",
          raza: "Mestizo",
          color: "Marron",
          tamanio: "Pequeño",
          descripcion: "Fue encontrada con un ojo infectado, luego resulto ser que directamente no lo tenia.",
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          id_mascota: 2,
          nombre: "Chenoa",
          raza: "Galgo",
          color: "Marron",
          tamanio: "Grande",
          descripcion: "Era muy flaca pero se puso en forma rapido, es muy activa y juguetona.",
          createdAt: new Date,
          updatedAt: new Date
        },
      ],
      {}
    );
  },
};
