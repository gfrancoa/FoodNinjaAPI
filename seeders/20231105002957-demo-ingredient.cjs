"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ingredients",
      [
        {
          title: "brisket"
        },
        {
          title: "marjoram"
        },
        {
          title: "nutmeg"
        },
        {
          title: "orange"
        },
        {
          title: "garbanzo bean"
        },
        {
          title: "lobster"
        },
        {
          title: "hummus"
        },
        {
          title: "strawberry"
        },
        {
          title: "beef"
        },
        {
          title: "mustard seed"
        },
        {
          title: "brussels sprout"
        },
        {
          title: "fish"
        },
        {
          title: "pork"
        },
        {
          title: "lemon"
        },
        {
          title: "apple"
        },
        {
          title: "black pepper"
        },
        {
          title: "black bean"
        },
        {
          title: "coffee bean"
        },
        {
          title: "pasta"
        },
        {
          title: "watermelon"
        },
        {
          title: "cranberry"
        },
        {
          title: "dill"
        },
        {
          title: "hot sauce"
        },
        {
          title: "turmeric"
        },
        {
          title: "pepperoni"
        },
        {
          title: "coconut milk"
        },
        {
          title: "plum"
        },
        {
          title: "milk tea"
        },
        {
          title: "melon"
        },
        {
          title: "tomato"
        },
        {
          title: "cheese curds"
        },
        {
          title: "cashew"
        },
        {
          title: "onion"
        },
        {
          title: "oat milk"
        },
        {
          title: "cauliflower rice"
        },
        {
          title: "banana"
        },
        {
          title: "millet"
        },
        {
          title: "leek"
        },
        {
          title: "duck"
        },
        {
          title: "basil"
        },
        {
          title: "lamb"
        },
        {
          title: "flour"
        },
        {
          title: "lentil"
        },
        {
          title: "peas"
        },
        {
          title: "caviar"
        },
        {
          title: "cardamom"
        },
        {
          title: "elderberry"
        },
        {
          title: "green olive"
        },
        {
          title: "raspberry"
        },
        {
          title: "vodka"
        },
        {
          title: "mackerel"
        },
        {
          title: "horseradish"
        },
        {
          title: "blue cheese"
        },
        {
          title: "cabbage"
        },
        {
          title: "avocado"
        },
        {
          title: "ground chicken"
        },
        {
          title: "butter"
        },
        {
          title: "coriander"
        },
        {
          title: "halibut"
        },
        {
          title: "iceberg lettuce"
        },
        {
          title: "dijon mustard"
        },
        {
          title: "artichoke"
        },
        {
          title: "chili powder"
        },
        {
          title: "edamame"
        },
        {
          title: "chive"
        },
        {
          title: "clove"
        },
        {
          title: "vanilla"
        },
        {
          title: "buttermilk"
        },
        {
          title: "eggs"
        },
        {
          title: "bacon"
        },
        {
          title: "green onion"
        },
        {
          title: "olive oil"
        },
        {
          title: "broccoli"
        },
        {
          title: "kohlrabi"
        },
        {
          title: "mushroom"
        },
        {
          title: "lime"
        },
        {
          title: "nutella"
        },
        {
          title: "brandy"
        },
        {
          title: "hazelnut"
        },
        {
          title: "pineapple"
        },
        {
          title: "ginger"
        },
        {
          title: "bell pepper"
        },
        {
          title: "bulgur"
        },
        {
          title: "guava"
        },
        {
          title: "mint"
        },
        {
          title: "cheddar cheese"
        },
        {
          title: "shrimp"
        },
        {
          title: "tofu"
        },
        {
          title: "soda"
        },
        {
          title: "garam masala"
        },
        {
          title: "ground turkey"
        },
        {
          title: "sugar"
        },
        {
          title: "barbecue sauce"
        },
        {
          title: "chicken broth"
        },
        {
          title: "yeast"
        },
        {
          title: "oolong tea"
        },
        {
          title: "canola oil"
        },
        {
          title: "lettuce"
        },
        {
          title: "ketchup"
        },
        {
          title: "mayonnaise"
        }
      ]
      ,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ingredients", null, {});
  },
};
