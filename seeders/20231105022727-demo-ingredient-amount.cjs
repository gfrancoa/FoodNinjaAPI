"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ingredient_amounts",
      [
        {
          "recipe_id": 1,
          "ingredient_id": 39,
          "unit": "bunch"
        },
        {
          "recipe_id": 1,
          "ingredient_id": 46,
          "unit": "g"
        },
        {
          "recipe_id": 1,
          "ingredient_id": 57,
          "unit": "tsp"
        },
        {
          "recipe_id": 1,
          "ingredient_id": 90,
          "unit": "cup"
        },
        {
          "recipe_id": 1,
          "ingredient_id": 65,
          "unit": "unit"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 86,
          "unit": "tsp"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 40,
          "unit": "bunch"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 44,
          "unit": "bunch"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 82,
          "unit": "g"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 88,
          "unit": "cup"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 77,
          "unit": "tbsp"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 93,
          "unit": "l"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 87,
          "unit": "kg"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 18,
          "unit": "ml"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 91,
          "unit": "piece"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 70,
          "unit": "g"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 60,
          "unit": "bunch"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 69,
          "unit": "unit"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 8,
          "unit": "tbsp"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 89,
          "unit": "ml"
        },
        {
          "recipe_id": 2,
          "ingredient_id": 68,
          "unit": "cup"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 87,
          "unit": "kg"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 5,
          "unit": "bunch"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 66,
          "unit": "piece"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 67,
          "unit": "g"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 70,
          "unit": "kg"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 92,
          "unit": "kg"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 32,
          "unit": "piece"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 9,
          "unit": "g"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 38,
          "unit": "tsp"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 78,
          "unit": "slice"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 47,
          "unit": "tbsp"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 25,
          "unit": "g"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 43,
          "unit": "bunch"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 24,
          "unit": "piece"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 4,
          "unit": "piece"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 73,
          "unit": "g"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 80,
          "unit": "piece"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 12,
          "unit": "g"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 81,
          "unit": "tsp"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 34,
          "unit": "l"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 42,
          "unit": "g"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 29,
          "unit": "tbsp"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 14,
          "unit": "piece"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 31,
          "unit": "kg"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 40,
          "unit": "bunch"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 65,
          "unit": "piece"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 10,
          "unit": "bunch"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 89,
          "unit": "tsp"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 27,
          "unit": "tsp"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 88,
          "unit": "tbsp"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 18,
          "unit": "ml"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 84,
          "unit": "cup"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 79,
          "unit": "slice"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 13,
          "unit": "kg"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 44,
          "unit": "cup"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 63,
          "unit": "ml"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 69,
          "unit": "unit"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 58,
          "unit": "g"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 74,
          "unit": "unit"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 93,
          "unit": "ml"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 99,
          "unit": "g"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 100,
          "unit": "unit"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 1,
          "unit": "tbsp"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 6,
          "unit": "tbsp"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 85,
          "unit": "g"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 28,
          "unit": "l"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 50,
          "unit": "ml"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 72,
          "unit": "l"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 71,
          "unit": "piece"
        },
        {
          "recipe_id": 3,
          "ingredient_id": 16,
          "unit": "tbsp"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 37,
          "unit": "tbsp"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 89,
          "unit": "unit"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 36,
          "unit": "piece"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 66,
          "unit": "g"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 53,
          "unit": "tsp"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 10,
          "unit": "slice"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 6,
          "unit": "g"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 7,
          "unit": "tsp"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 92,
          "unit": "kg"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 25,
          "unit": "tbsp"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 94,
          "unit": "g"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 72,
          "unit": "cup"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 14,
          "unit": "piece"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 28,
          "unit": "ml"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 100,
          "unit": "ml"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 2,
          "unit": "ml"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 70,
          "unit": "kg"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 80,
          "unit": "piece"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 81,
          "unit": "piece"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 65,
          "unit": "tsp"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 13,
          "unit": "slice"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 43,
          "unit": "tsp"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 85,
          "unit": "g"
        },
        {
          "recipe_id": 4,
          "ingredient_id": 34,
          "unit": "ml"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 33,
          "unit": "piece"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 37,
          "unit": "tsp"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 5,
          "unit": "unit"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 67,
          "unit": "piece"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 74,
          "unit": "unit"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 96,
          "unit": "slice"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 61,
          "unit": "cup"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 22,
          "unit": "ml"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 26,
          "unit": "ml"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 100,
          "unit": "unit"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 2,
          "unit": "ml"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 12,
          "unit": "slice"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 73,
          "unit": "tbsp"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 27,
          "unit": "tsp"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 51,
          "unit": "slice"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 71,
          "unit": "piece"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 19,
          "unit": "unit"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 66,
          "unit": "slice"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 47,
          "unit": "piece"
        },
        {
          "recipe_id": 5,
          "ingredient_id": 49,
          "unit": "bunch"
        },
        {
          "recipe_id": 6,
          "ingredient_id": 4,
          "unit": "piece"
        },
        {
          "recipe_id": 6,
          "ingredient_id": 100,
          "unit": "ml"
        },
        {
          "recipe_id": 6,
          "ingredient_id": 32,
          "unit": "slice"
        },
        {
          "recipe_id": 6,
          "ingredient_id": 31,
          "unit": "kg"
        },
        {
          "recipe_id": 6,
          "ingredient_id": 38,
          "unit": "cup"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 80,
          "unit": "piece"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 43,
          "unit": "bunch"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 56,
          "unit": "kg"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 55,
          "unit": "tbsp"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 49,
          "unit": "unit"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 98,
          "unit": "bunch"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 73,
          "unit": "bunch"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 53,
          "unit": "kg"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 72,
          "unit": "cup"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 13,
          "unit": "kg"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 68,
          "unit": "cup"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 31,
          "unit": "kg"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 100,
          "unit": "ml"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 27,
          "unit": "piece"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 52,
          "unit": "cup"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 87,
          "unit": "g"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 19,
          "unit": "g"
        },
        {
          "recipe_id": 7,
          "ingredient_id": 3,
          "unit": "unit"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 8,
          "unit": "tsp"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 57,
          "unit": "tbsp"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 34,
          "unit": "cup"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 22,
          "unit": "bunch"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 73,
          "unit": "g"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 72,
          "unit": "l"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 12,
          "unit": "g"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 28,
          "unit": "l"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 10,
          "unit": "bunch"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 98,
          "unit": "bunch"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 100,
          "unit": "unit"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 52,
          "unit": "tbsp"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 66,
          "unit": "tbsp"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 43,
          "unit": "cup"
        },
        {
          "recipe_id": 8,
          "ingredient_id": 82,
          "unit": "kg"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 41,
          "unit": "tbsp"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 29,
          "unit": "ml"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 6,
          "unit": "g"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 8,
          "unit": "cup"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 7,
          "unit": "cup"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 58,
          "unit": "bunch"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 55,
          "unit": "piece"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 18,
          "unit": "g"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 3,
          "unit": "tbsp"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 12,
          "unit": "slice"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 4,
          "unit": "piece"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 85,
          "unit": "unit"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 15,
          "unit": "piece"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 19,
          "unit": "unit"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 1,
          "unit": "tsp"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 86,
          "unit": "tbsp"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 50,
          "unit": "g"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 88,
          "unit": "tbsp"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 93,
          "unit": "cup"
        },
        {
          "recipe_id": 9,
          "ingredient_id": 84,
          "unit": "tsp"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 95,
          "unit": "kg"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 71,
          "unit": "piece"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 20,
          "unit": "ml"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 19,
          "unit": "bunch"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 69,
          "unit": "unit"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 10,
          "unit": "g"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 54,
          "unit": "bunch"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 70,
          "unit": "slice"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 25,
          "unit": "tsp"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 53,
          "unit": "tsp"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 97,
          "unit": "l"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 84,
          "unit": "tsp"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 57,
          "unit": "kg"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 78,
          "unit": "unit"
        },
        {
          "recipe_id": 10,
          "ingredient_id": 64,
          "unit": "ml"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 82,
          "unit": "tsp"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 6,
          "unit": "cup"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 15,
          "unit": "piece"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 64,
          "unit": "cup"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 78,
          "unit": "tbsp"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 91,
          "unit": "piece"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 84,
          "unit": "bunch"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 92,
          "unit": "tsp"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 65,
          "unit": "slice"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 3,
          "unit": "tbsp"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 34,
          "unit": "ml"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 99,
          "unit": "slice"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 26,
          "unit": "l"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 46,
          "unit": "tsp"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 70,
          "unit": "kg"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 49,
          "unit": "bunch"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 42,
          "unit": "tsp"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 81,
          "unit": "slice"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 68,
          "unit": "cup"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 73,
          "unit": "unit"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 94,
          "unit": "kg"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 57,
          "unit": "g"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 1,
          "unit": "slice"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 54,
          "unit": "slice"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 9,
          "unit": "g"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 20,
          "unit": "cup"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 69,
          "unit": "unit"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 18,
          "unit": "g"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 88,
          "unit": "ml"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 45,
          "unit": "slice"
        },
        {
          "recipe_id": 11,
          "ingredient_id": 16,
          "unit": "tbsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 80,
          "unit": "piece"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 4,
          "unit": "piece"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 84,
          "unit": "ml"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 30,
          "unit": "piece"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 3,
          "unit": "g"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 18,
          "unit": "cup"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 52,
          "unit": "bunch"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 2,
          "unit": "cup"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 25,
          "unit": "tbsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 31,
          "unit": "tsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 1,
          "unit": "g"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 64,
          "unit": "bunch"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 49,
          "unit": "g"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 91,
          "unit": "piece"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 38,
          "unit": "unit"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 70,
          "unit": "g"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 77,
          "unit": "piece"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 36,
          "unit": "piece"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 24,
          "unit": "tsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 59,
          "unit": "piece"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 21,
          "unit": "bunch"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 97,
          "unit": "cup"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 22,
          "unit": "tbsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 92,
          "unit": "tsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 5,
          "unit": "tsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 23,
          "unit": "l"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 28,
          "unit": "ml"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 55,
          "unit": "tbsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 44,
          "unit": "tbsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 87,
          "unit": "g"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 71,
          "unit": "piece"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 37,
          "unit": "unit"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 63,
          "unit": "unit"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 16,
          "unit": "kg"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 88,
          "unit": "tsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 42,
          "unit": "tsp"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 8,
          "unit": "slice"
        },
        {
          "recipe_id": 12,
          "ingredient_id": 33,
          "unit": "piece"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 82,
          "unit": "tsp"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 22,
          "unit": "tsp"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 48,
          "unit": "bunch"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 23,
          "unit": "l"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 33,
          "unit": "piece"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 64,
          "unit": "tbsp"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 37,
          "unit": "unit"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 67,
          "unit": "tbsp"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 32,
          "unit": "g"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 16,
          "unit": "tsp"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 91,
          "unit": "g"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 95,
          "unit": "tsp"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 70,
          "unit": "g"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 45,
          "unit": "g"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 80,
          "unit": "piece"
        },
        {
          "recipe_id": 13,
          "ingredient_id": 15,
          "unit": "piece"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 82,
          "unit": "g"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 5,
          "unit": "ml"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 18,
          "unit": "ml"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 62,
          "unit": "piece"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 89,
          "unit": "tbsp"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 64,
          "unit": "bunch"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 43,
          "unit": "tbsp"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 26,
          "unit": "ml"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 22,
          "unit": "g"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 35,
          "unit": "g"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 10,
          "unit": "slice"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 14,
          "unit": "piece"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 40,
          "unit": "bunch"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 52,
          "unit": "tbsp"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 24,
          "unit": "ml"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 57,
          "unit": "tsp"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 94,
          "unit": "kg"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 27,
          "unit": "unit"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 69,
          "unit": "unit"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 2,
          "unit": "unit"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 85,
          "unit": "slice"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 81,
          "unit": "piece"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 93,
          "unit": "cup"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 92,
          "unit": "g"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 88,
          "unit": "unit"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 84,
          "unit": "cup"
        },
        {
          "recipe_id": 14,
          "ingredient_id": 41,
          "unit": "g"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 90,
          "unit": "unit"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 1,
          "unit": "slice"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 21,
          "unit": "tsp"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 99,
          "unit": "slice"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 50,
          "unit": "slice"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 74,
          "unit": "cup"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 91,
          "unit": "tsp"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 31,
          "unit": "kg"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 2,
          "unit": "g"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 41,
          "unit": "unit"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 9,
          "unit": "g"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 97,
          "unit": "ml"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 40,
          "unit": "bunch"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 42,
          "unit": "kg"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 29,
          "unit": "ml"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 3,
          "unit": "tbsp"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 19,
          "unit": "ml"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 48,
          "unit": "unit"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 24,
          "unit": "piece"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 36,
          "unit": "piece"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 75,
          "unit": "piece"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 7,
          "unit": "piece"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 94,
          "unit": "g"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 84,
          "unit": "tbsp"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 39,
          "unit": "unit"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 28,
          "unit": "ml"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 46,
          "unit": "slice"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 25,
          "unit": "tbsp"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 80,
          "unit": "piece"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 77,
          "unit": "ml"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 63,
          "unit": "ml"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 64,
          "unit": "ml"
        },
        {
          "recipe_id": 15,
          "ingredient_id": 32,
          "unit": "slice"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 16,
          "unit": "tsp"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 26,
          "unit": "cup"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 9,
          "unit": "g"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 32,
          "unit": "cup"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 22,
          "unit": "piece"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 21,
          "unit": "g"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 23,
          "unit": "cup"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 13,
          "unit": "slice"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 55,
          "unit": "tbsp"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 15,
          "unit": "piece"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 76,
          "unit": "piece"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 4,
          "unit": "piece"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 91,
          "unit": "unit"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 90,
          "unit": "tsp"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 11,
          "unit": "bunch"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 41,
          "unit": "slice"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 44,
          "unit": "cup"
        },
        {
          "recipe_id": 16,
          "ingredient_id": 33,
          "unit": "piece"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 85,
          "unit": "g"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 11,
          "unit": "tsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 2,
          "unit": "tbsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 43,
          "unit": "cup"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 68,
          "unit": "cup"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 63,
          "unit": "ml"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 10,
          "unit": "ml"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 81,
          "unit": "piece"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 97,
          "unit": "cup"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 12,
          "unit": "kg"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 40,
          "unit": "bunch"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 42,
          "unit": "tbsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 74,
          "unit": "bunch"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 73,
          "unit": "tsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 21,
          "unit": "unit"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 76,
          "unit": "cup"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 33,
          "unit": "piece"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 13,
          "unit": "slice"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 19,
          "unit": "bunch"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 89,
          "unit": "tsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 62,
          "unit": "tsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 78,
          "unit": "g"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 32,
          "unit": "tbsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 64,
          "unit": "tsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 66,
          "unit": "tbsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 24,
          "unit": "tbsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 35,
          "unit": "unit"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 6,
          "unit": "cup"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 59,
          "unit": "unit"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 26,
          "unit": "l"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 93,
          "unit": "ml"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 9,
          "unit": "slice"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 88,
          "unit": "tsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 75,
          "unit": "g"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 83,
          "unit": "tbsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 14,
          "unit": "piece"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 23,
          "unit": "l"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 38,
          "unit": "g"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 27,
          "unit": "g"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 15,
          "unit": "piece"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 80,
          "unit": "piece"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 37,
          "unit": "slice"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 8,
          "unit": "tbsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 72,
          "unit": "l"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 54,
          "unit": "bunch"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 16,
          "unit": "tsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 45,
          "unit": "tbsp"
        },
        {
          "recipe_id": 17,
          "ingredient_id": 90,
          "unit": "ml"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 95,
          "unit": "g"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 60,
          "unit": "bunch"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 36,
          "unit": "piece"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 5,
          "unit": "g"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 75,
          "unit": "g"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 31,
          "unit": "g"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 63,
          "unit": "tbsp"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 78,
          "unit": "cup"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 3,
          "unit": "g"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 50,
          "unit": "bunch"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 99,
          "unit": "tsp"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 12,
          "unit": "slice"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 35,
          "unit": "ml"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 67,
          "unit": "tbsp"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 68,
          "unit": "cup"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 72,
          "unit": "cup"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 17,
          "unit": "unit"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 26,
          "unit": "ml"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 6,
          "unit": "bunch"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 27,
          "unit": "ml"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 79,
          "unit": "tsp"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 45,
          "unit": "ml"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 93,
          "unit": "ml"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 97,
          "unit": "cup"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 83,
          "unit": "slice"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 7,
          "unit": "cup"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 33,
          "unit": "piece"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 40,
          "unit": "bunch"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 23,
          "unit": "l"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 84,
          "unit": "ml"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 86,
          "unit": "tbsp"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 100,
          "unit": "g"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 52,
          "unit": "unit"
        },
        {
          "recipe_id": 18,
          "ingredient_id": 30,
          "unit": "piece"
        },
        {
          "recipe_id": 19,
          "ingredient_id": 54,
          "unit": "unit"
        },
        {
          "recipe_id": 19,
          "ingredient_id": 18,
          "unit": "tsp"
        },
        {
          "recipe_id": 19,
          "ingredient_id": 47,
          "unit": "slice"
        },
        {
          "recipe_id": 19,
          "ingredient_id": 15,
          "unit": "piece"
        },
        {
          "recipe_id": 19,
          "ingredient_id": 23,
          "unit": "l"
        },
        {
          "recipe_id": 19,
          "ingredient_id": 46,
          "unit": "bunch"
        },
        {
          "recipe_id": 19,
          "ingredient_id": 20,
          "unit": "ml"
        },
        {
          "recipe_id": 19,
          "ingredient_id": 39,
          "unit": "piece"
        },
        {
          "recipe_id": 20,
          "ingredient_id": 15,
          "unit": "piece"
        },
        {
          "recipe_id": 20,
          "ingredient_id": 34,
          "unit": "cup"
        },
        {
          "recipe_id": 20,
          "ingredient_id": 20,
          "unit": "l"
        },
        {
          "recipe_id": 20,
          "ingredient_id": 11,
          "unit": "bunch"
        },
        {
          "recipe_id": 20,
          "ingredient_id": 28,
          "unit": "ml"
        },
        {
          "recipe_id": 20,
          "ingredient_id": 44,
          "unit": "tsp"
        },
        {
          "recipe_id": 20,
          "ingredient_id": 55,
          "unit": "unit"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 58,
          "unit": "unit"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 99,
          "unit": "unit"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 28,
          "unit": "ml"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 92,
          "unit": "g"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 16,
          "unit": "tsp"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 79,
          "unit": "slice"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 86,
          "unit": "tsp"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 49,
          "unit": "g"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 6,
          "unit": "bunch"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 81,
          "unit": "piece"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 40,
          "unit": "bunch"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 83,
          "unit": "tsp"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 9,
          "unit": "g"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 38,
          "unit": "bunch"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 17,
          "unit": "slice"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 100,
          "unit": "cup"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 84,
          "unit": "bunch"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 29,
          "unit": "unit"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 80,
          "unit": "piece"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 12,
          "unit": "g"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 33,
          "unit": "piece"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 35,
          "unit": "g"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 70,
          "unit": "slice"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 46,
          "unit": "g"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 60,
          "unit": "bunch"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 10,
          "unit": "bunch"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 61,
          "unit": "piece"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 63,
          "unit": "ml"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 94,
          "unit": "g"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 43,
          "unit": "slice"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 1,
          "unit": "g"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 62,
          "unit": "bunch"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 13,
          "unit": "slice"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 27,
          "unit": "tbsp"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 93,
          "unit": "l"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 34,
          "unit": "l"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 95,
          "unit": "kg"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 18,
          "unit": "ml"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 30,
          "unit": "piece"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 76,
          "unit": "tbsp"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 50,
          "unit": "slice"
        },
        {
          "recipe_id": 21,
          "ingredient_id": 44,
          "unit": "slice"
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ingredient_amounts", null, {});
  },
};
