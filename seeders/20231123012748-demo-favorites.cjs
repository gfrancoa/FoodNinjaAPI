'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "favorites",
      [
        {
          user_id: 2,
          recipe_id: 16
        },
        {
          user_id: 1,
          recipe_id: 13
        },
        {
          user_id: 3,
          recipe_id: 7
        },
        {
          user_id: 4,
          recipe_id: 5
        },
        {
          user_id: 3,
          recipe_id: 17
        },
        {
          user_id: 5,
          recipe_id: 2
        },
        {
          user_id: 1,
          recipe_id: 2
        },
        {
          user_id: 3,
          recipe_id: 11
        },
        {
          user_id: 2,
          recipe_id: 17
        },
        {
          user_id: 2,
          recipe_id: 4
        },
        {
          user_id: 2,
          recipe_id: 8
        },
        {
          user_id: 5,
          recipe_id: 5
        },
        {
          user_id: 1,
          recipe_id: 16
        },
        {
          user_id: 5,
          recipe_id: 1
        },
        {
          user_id: 4,
          recipe_id: 8
        },
        {
          user_id: 3,
          recipe_id: 18
        },
        {
          user_id: 3,
          recipe_id: 20
        },
        {
          user_id: 1,
          recipe_id: 7
        },
        {
          user_id: 4,
          recipe_id: 16
        },
        {
          user_id: 4,
          recipe_id: 3
        },
        {
          user_id: 3,
          recipe_id: 13
        },
        {
          user_id: 1,
          recipe_id: 12
        },
        {
          user_id: 3,
          recipe_id: 15
        },
        {
          user_id: 1,
          recipe_id: 8
        },
        {
          user_id: 2,
          recipe_id: 5
        },
        {
          user_id: 2,
          recipe_id: 18
        },
        {
          user_id: 2,
          recipe_id: 9
        },
        {
          user_id: 2,
          recipe_id: 21
        },
        {
          user_id: 3,
          recipe_id: 1
        },
        {
          user_id: 5,
          recipe_id: 4
        },
        {
          user_id: 4,
          recipe_id: 15
        },
        {
          user_id: 1,
          recipe_id: 9
        },
        {
          user_id: 4,
          recipe_id: 7
        },
        {
          user_id: 1,
          recipe_id: 21
        },
        {
          user_id: 1,
          recipe_id: 18
        },
        {
          user_id: 1,
          recipe_id: 15
        },
        {
          user_id: 2,
          recipe_id: 3
        },
        {
          user_id: 4,
          recipe_id: 17
        },
        {
          user_id: 2,
          recipe_id: 19
        },
        {
          user_id: 3,
          recipe_id: 8
        },
        {
          user_id: 1,
          recipe_id: 5
        }
      ]


    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("favorites", null, {});
}
};
