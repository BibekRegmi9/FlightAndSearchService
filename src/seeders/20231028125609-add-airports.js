'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name: "Tribhuwan International Airport",
        cityId: "12",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pokhara International Airport",
        cityId: "13",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nepaljung Airport",
        cityId: "14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Palpa Airport",
        cityId: "18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tulsipur Airport",
        cityId: "17",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ghorahi Airport",
        cityId: "17",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Butwal Airport",
        cityId: "17",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
