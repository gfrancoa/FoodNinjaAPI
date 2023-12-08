"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "vegetarian",
        },
        {
          title: "vegan",
        },
        {
          title: "lactose free",
        },
        {
          title: "gluten free",
        },
        {
          title: "ketogenic",
        },
        {
          title: "halal",
        },
        {
          title: "kosher",
        },
        {
          title: "dessert",
        },
        {
          title: "drinks",
        },
        {
          title: "holidays",
        },
        {
          title: "spicy",
        },
        {
          title: "featured",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("tags", null, {});
  },
};
