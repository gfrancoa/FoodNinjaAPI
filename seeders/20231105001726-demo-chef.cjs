"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "chefs",
      [
        {
          user_id: 2,
          biography:
            "Founder of The Healthy Chef, classically French trained Jane has a passion for Nutrition, Diet and all things healthy. She is an internationally acclaimed fitness trainer and combines her extensive knowledge of food, nutrition and excersize to promote her healthy philosophy. Teresa is the recipient of many awards including the Gold Medal at the Salon Cullinare. She writes for various food columns including the Herald Sun Food For Thought and works with world famous companies Blackmores, Vitamix and her sponsors BSc Body Science. Unique in her approach Teresa's philosophy on cooking extends to a complete mind and body experience .",
          img_url:
            "/images/chefImage/chef_jane.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "user_id": 3,
          "biography": "Passionate about flavors and culinary arts, Chef Erick brings a creative twist to traditional recipes. Trained in both French and Italian cuisine, she has a keen eye for detail and a commitment to using the finest ingredients. With a decade of experience in top-notch restaurants, Chef Erick is dedicated to making every dining experience memorable.",
          "img_url": "/images/chefImage/chef_erick.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          "user_id": 4,
          "biography": "Chef caroline, a culinary artist with a passion for bringing global flavors to the table. Trained in South American and Asian cuisine, Tess creates dishes that are a fusion of tradition and innovation. With a background in fine dining establishments, he has mastered the art of balancing spices and textures. Chef caroline believes that every meal should tell a story, and he invites you to embark on a flavorful journey through his creations.",
          "img_url": "/images/chefImage/chef_caroline.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("chefs", null, {});
  },
};
