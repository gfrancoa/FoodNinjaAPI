"use strict";
const bcrypt = require('bcrypt');
const password1 = bcrypt.hashSync("Admin123*", 10)
const password2 = bcrypt.hashSync("Admin123*", 10)
const password3 = bcrypt.hashSync("Admin123*", 10)
const password4 = bcrypt.hashSync("Admin123*", 10)
const password5 = bcrypt.hashSync("Admin123*", 10)


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "john-doe",
          name: "John Doe",
          password: password1,
          role_id: 3,
          email: "example@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "jane-doe",
          name: "Jane Doe",
          password: password2,
          role_id: 2,
          email: "jane@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "erick.salas",
          name: "Erick Salas",
          password: password3,
          role_id: 2,
          email: "erick@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "caroline_richards",
          name: "Caroline M. Richards",
          password: password4,
          role_id: 2,
          email: "jasmine@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "anna.watts",
          name: "Anna Wats",
          password: password5,
          role_id: 1,
          email: "anna@example.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
