"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("vacunas",
      [
        {
          id_vacuna: 1,
          nombre: "Vacuna A",
          id_mascota: 1,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          id_vacuna: 2,
          nombre: "Vacuna A",
          id_mascota: 2,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          id_vacuna: 3,
          nombre: "Vacuna B",
          id_mascota: 2,
          createdAt: new Date,
          updatedAt: new Date
        },
      ],
      {}
    );
  },
};
