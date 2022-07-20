"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("imagenes",
      [
        {
          id_imagen: 1,
          imagen: "https://i.imgur.com/W3aW7Xm.jpg",
          id_mascota: 1,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          id_imagen: 2,
          imagen: "https://i.imgur.com/Ne6Zou2.jpg",
          id_mascota: 1,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          id_imagen: 3,
          imagen: "https://i.imgur.com/5vomZLM.jpg",
          id_mascota: 2,
          createdAt: new Date,
          updatedAt: new Date
        },
      ],
      {}
    );
  },
};
