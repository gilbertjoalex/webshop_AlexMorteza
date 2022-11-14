"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Victoria Fuchyzhy",
        email: "shrbgelwkg@sakjrbgalkjrg.com",
        password: "akjebawk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alex Joaris",
        email: "shrbgelwkg@sakjrbgalkjrg.com",
        password: "akjebawk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Morteza Khamedi",
        email: "shrbgelwkg@sakjrbgalkjrg.com",
        password: "akjebawk",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
