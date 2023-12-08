'use strict';

const { uuid } = require("uuidv4")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "reviews", 
      [
        {
          id: "4bb9095d-ac64-48b3-b54d-bcead73ad1f3",
          title: "Best Pizza that I have tried.",
          text: "WHAT IS THIS PIZZA?",
          user_id: 2,
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "b8160d15-08f2-477d-905b-d7799a6a823f",
          title: "Best Poutine that I have tried.",
          text: "Amazing poutine with amazing taste.",
          user_id: 1,
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "c762c581-93cb-4c30-877a-a5b77b5033a4",
          title: "Review for recipe 2",
          text: "This is a sample review text.",
          user_id: 5,
          recipe_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "4f457a62-03ac-4165-bd0a-30db6a08ecbc",
          title: "Review for recipe 11",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "9b1c1330-26c7-46db-84e7-a1d208f354b1",
          title: "Review for recipe 9",
          text: "This is a sample review text.",
          user_id: 3,
          recipe_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "710b9692-6f7b-44c1-9bd7-673ac77dc8e4",
          title: "Review for recipe 12",
          text: "This is a sample review text.",
          user_id: 5,
          recipe_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "c6b4a46e-67e5-49fd-b286-4cf68cb245f8",
          title: "Review for recipe 16",
          text: "This is a sample review text.",
          user_id: 5,
          recipe_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "f0d59cd2-b25b-4941-bca1-52fd9e97bb1d",
          title: "Review for recipe 3",
          text: "This is a sample review text.",
          user_id: 3,
          recipe_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "23938b02-8aee-4c4f-ba63-1f2062c52c3d",
          title: "Review for recipe 9",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "eb84797b-ddc3-4eb6-97ab-b799284548b6",
          title: "Review for recipe 14",
          text: "This is a sample review text.",
          user_id: 4,
          recipe_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "dc82aebd-f2e6-47a0-be6e-8c45d64bc0e7",
          title: "Review for recipe 4",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "554b9d24-30f8-416d-8d76-9ad60f2ea9fe",
          title: "Review for recipe 10",
          text: "This is a sample review text.",
          user_id: 3,
          recipe_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "676144c4-94b1-4ae7-9361-82d56b00fa63",
          title: "Review for recipe 8",
          text: "This is a sample review text.",
          user_id: 3,
          recipe_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "3c2879fe-dab0-4288-95cc-eed8b25b958d",
          title: "Review for recipe 7",
          text: "This is a sample review text.",
          user_id: 4,
          recipe_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "7471d94d-7006-4966-897a-7b60b7836937",
          title: "Review for recipe 18",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "e9b53359-df34-4781-94e8-733a060c1fa3",
          title: "Review for recipe 4",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "2c63ee48-dc94-48d2-a40d-94fab986ba8f",
          title: "Review for recipe 11",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "923e65cf-9a40-4cba-bebd-f3c2180939eb",
          title: "Review for recipe 7",
          text: "This is a sample review text.",
          user_id: 5,
          recipe_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "54955aad-6a7a-413e-941b-ced058c5a40c",
          title: "Review for recipe 18",
          text: "This is a sample review text.",
          user_id: 5,
          recipe_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "94183619-1cc4-4c78-8476-e565652aa8bc",
          title: "Review for recipe 12",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "fe09a6b2-fde6-41db-bdd9-3bfed938a56b",
          title: "Review for recipe 2",
          text: "This is a sample review text.",
          user_id: 4,
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "18022c95-83b1-429b-9bc1-b5f0081e3096",
          title: "Review for recipe 20",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "95b066ed-5d66-4402-a072-19777706d501",
          title: "Review for recipe 3",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "bd559650-3a4b-4294-8a51-24bc1332c85e",
          title: "Review for recipe 15",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "6704afb0-5712-4cd1-b3d3-50c6fe9e24ff",
          title: "Review for recipe 21",
          text: "This is a sample review text.",
          user_id: 5,
          recipe_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "1a55e53a-e654-4a79-bf93-cdd774404033",
          title: "Review for recipe 11",
          text: "This is a sample review text.",
          user_id: 4,
          recipe_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "6835235e-eea3-4fec-9487-4fdb099ffaaf",
          title: "Review for recipe 20",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "702064d1-c32c-4707-946c-315f30f82c05",
          title: "Review for recipe 12",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "74ead519-391d-4723-b7f6-4266bcaa29c2",
          title: "Review for recipe 7",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "837b3521-6a68-40ae-acb6-3e76c032bb40",
          title: "Review for recipe 19",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "56b22471-276b-47e7-9bb1-a1a40beef1e9",
          title: "Review for recipe 5",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "999a7b31-d581-4414-8b80-8f57f807996c",
          title: "Review for recipe 6",
          text: "This is a sample review text.",
          user_id: 3,
          recipe_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "3f64cf55-8885-4e72-8c94-7a4e98066259",
          title: "Review for recipe 1",
          text: "This is a sample review text.",
          user_id: 3,
          recipe_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "c8505abb-edc8-4a9c-b1f6-e29d86249931",
          title: "Review for recipe 2",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "7739b699-6305-4b4f-9c72-8e762ed2a241",
          title: "Review for recipe 20",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "db15d8cd-fc01-4a3c-9961-324966da2ca5",
          title: "Review for recipe 2",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "c43c27dc-3dfb-4054-8fa1-935111a16772",
          title: "Review for recipe 15",
          text: "This is a sample review text.",
          user_id: 3,
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "0bf15ea4-7a61-4ae6-97a3-7a518d7fcf55",
          title: "Review for recipe 4",
          text: "This is a sample review text.",
          user_id: 4,
          recipe_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "79bd8d72-5ef0-434c-8de4-0643737c55dd",
          title: "Review for recipe 20",
          text: "This is a sample review text.",
          user_id: 5,
          recipe_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "78619b4b-4cbe-42f8-a5d2-359433f19a15",
          title: "Review for recipe 16",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "e8c4a977-af70-4dd8-a11c-0b4ab99f4a38",
          title: "Review for recipe 14",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "c4b853b6-8971-4bf9-82e6-a9df2c5a18e0",
          title: "Review for recipe 21",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "1c70af56-d405-4c10-8c05-37f6103f6a03",
          title: "Review for recipe 10",
          text: "This is a sample review text.",
          user_id: 5,
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "ae67fd95-826d-4fc7-b25e-30193e4197b1",
          title: "Review for recipe 5",
          text: "This is a sample review text.",
          user_id: 5,
          recipe_id: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "3b54470a-9c2d-4f62-922c-1a2a91e2c080",
          title: "Review for recipe 20",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "41e283a5-872e-4188-8b1d-8a1f950ac721",
          title: "Review for recipe 20",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "66505460-4f5b-4b11-bad3-0c4c41f48c39",
          title: "Review for recipe 1",
          text: "This is a sample review text.",
          user_id: 5,
          recipe_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "6445f5b2-69d5-481e-a270-444b4902902d",
          title: "Review for recipe 3",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "45019f26-c443-4c6a-a0df-89a53d4d0a93",
          title: "Review for recipe 15",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "a93afc56-0227-42f6-9139-f8d7583162aa",
          title: "Review for recipe 10",
          text: "This is a sample review text.",
          user_id: 2,
          recipe_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "aeb9da46-e96f-4258-a3fb-1088332e8af6",
          title: "Review for recipe 8",
          text: "This is a sample review text.",
          user_id: 3,
          recipe_id: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "b479899d-0d1e-46ed-bfbd-d960c9b249d6",
          title: "Review for recipe 3",
          text: "This is a sample review text.",
          user_id: 1,
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]

    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("reviews", null, {}) 
  }
};
