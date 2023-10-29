"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "Boeing 757",
          capacity: 316,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          modelNumber: "Airbus A380",
          capacity: 266,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          modelNumber: "Boeing 727",
          capacity: 306,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          modelNumber: "Airbus A318",
          capacity: 210,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          modelNumber: "Airbus A340",
          capacity: 340,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
