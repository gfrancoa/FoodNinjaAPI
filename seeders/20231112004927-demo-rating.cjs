"use strict";
const { uuid } = require("uuidv4");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: "6140a2ca-5975-49f2-8e01-fb7df6c192f7",
          rating: 4,
          user_id: 2,
          recipe_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "0ee51e54-5933-4279-b900-db8e9103b41a",
          rating: 1,
          user_id: 1,
          recipe_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "c0b153aa-a435-4622-a5cf-a0b313a1d858",
          rating: 3,
          user_id: 4,
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "a08ca35d-b28c-46fd-9973-6f894283a9f0",
          rating: 3,
          user_id: 2,
          recipe_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "17d3c764-2bcc-4187-bce3-bad1b80c430a",
          rating: 3,
          user_id: 3,
          recipe_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "15a5ea79-0969-4366-a51b-db2688dbb660",
          rating: 3,
          user_id: 2,
          recipe_id: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "638d3a87-a280-43af-b6b5-2774057708fa",
          rating: 1,
          user_id: 4,
          recipe_id: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "837c8c7c-1bb8-4669-b62d-17c499f7e04b",
          rating: 1,
          user_id: 4,
          recipe_id: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "ca82d787-ff1f-4028-8c0f-f3dcf6661619",
          rating: 1,
          user_id: 5,
          recipe_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "d932953f-13c5-4f63-8b36-7b97fd12d1e2",
          rating: 5,
          user_id: 4,
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "429f05d1-e608-47e2-9db2-e5d5d91a9236",
          rating: 5,
          user_id: 4,
          recipe_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "c693a29c-20b0-4625-a104-d700a562b4d9",
          rating: 2,
          user_id: 5,
          recipe_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "c0a319a3-b787-47de-9891-22ae4686fa0b",
          rating: 3,
          user_id: 3,
          recipe_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "43c83d1c-b8ef-4857-a240-3dbf76aa1591",
          rating: 2,
          user_id: 2,
          recipe_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "e02d9d6c-7073-49aa-bd12-8b3afb2e5018",
          rating: 2,
          user_id: 2,
          recipe_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "669e50ac-e268-47fc-b653-f7427da5cd99",
          rating: 3,
          user_id: 3,
          recipe_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "a350dc65-5a1a-4afb-a516-c0c1a795cd9f",
          rating: 3,
          user_id: 4,
          recipe_id: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "5612f27f-34e9-4915-8c39-c1c5fa9bb9b6",
          rating: 2,
          user_id: 1,
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "e91b0830-5a18-43c0-a01a-aa0c4b21a0e5",
          rating: 4,
          user_id: 2,
          recipe_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "16312b80-4e32-4eef-883a-fde30d179768",
          rating: 1,
          user_id: 1,
          recipe_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "511c4a7b-f5ea-49b5-8ae1-36d0787da8fd",
          rating: 2,
          user_id: 4,
          recipe_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "3debbe4a-5624-4baf-a8ef-5b3be7971a43",
          rating: 2,
          user_id: 3,
          recipe_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "f076b472-5e73-4a99-91be-210416374713",
          rating: 2,
          user_id: 2,
          recipe_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "6cc9ab37-0a09-4435-844a-ad97141d5b6f",
          rating: 1,
          user_id: 4,
          recipe_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "feffbb3c-fc91-485f-a995-74d7954082d8",
          rating: 3,
          user_id: 2,
          recipe_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "a606e59a-bc7e-4997-ab47-33cebc1c3c0c",
          rating: 4,
          user_id: 5,
          recipe_id: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "02cd1901-7738-4457-ae89-469fae729b32",
          rating: 4,
          user_id: 3,
          recipe_id: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "7b84cfd3-b72d-4c1f-8aa5-4ef4d72b474b",
          rating: 2,
          user_id: 5,
          recipe_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "597fcb3c-5eb7-4503-a70b-beba6566e0e1",
          rating: 2,
          user_id: 5,
          recipe_id: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "7bc4d9d4-dd93-4b29-aab1-6407225a3931",
          rating: 5,
          user_id: 2,
          recipe_id: 19,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "75f4773d-60b3-4ec3-8015-e5341f50e70c",
          rating: 5,
          user_id: 3,
          recipe_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "6ab73dd0-0891-41e3-a084-730b21c38a75",
          rating: 2,
          user_id: 4,
          recipe_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "929834fa-d4a4-404f-9fc3-aa8634a3039c",
          rating: 5,
          user_id: 1,
          recipe_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "9985c94d-7965-4cde-ae0c-66a407a52a0c",
          rating: 5,
          user_id: 1,
          recipe_id: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "9f6eed63-860a-4d8c-909f-484964dd3cab",
          rating: 5,
          user_id: 3,
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "7a1ae15b-1ffd-40fa-b2ef-4c948df615de",
          rating: 1,
          user_id: 4,
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "5ac6bfab-6776-428a-8e5b-9b46a37b1dfe",
          rating: 2,
          user_id: 4,
          recipe_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "61b576f2-cd59-4256-8c2f-7e67d12d4303",
          rating: 2,
          user_id: 4,
          recipe_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "28dba04d-6b7a-4137-8157-b2d5ff898228",
          rating: 2,
          user_id: 2,
          recipe_id: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "3b6665b1-7a57-4aa7-b6a8-3349d70c6ec1",
          rating: 1,
          user_id: 1,
          recipe_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "c3ec4975-a00c-4cd8-90c5-a658969698e0",
          rating: 2,
          user_id: 1,
          recipe_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "6d2045c8-d729-46c3-b450-6fe95afcdaff",
          rating: 3,
          user_id: 3,
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "a6b4b715-7e4c-499f-a768-bf0a79f8764d",
          rating: 3,
          user_id: 3,
          recipe_id: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "3633a94e-7dde-408f-b6ba-4f1d0afb6f4e",
          rating: 2,
          user_id: 5,
          recipe_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "48703c2f-e169-417b-9a1b-219bae17b058",
          rating: 2,
          user_id: 1,
          recipe_id: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "a6734622-1ff1-4b2f-ae62-7bf2ec5e2410",
          rating: 5,
          user_id: 4,
          recipe_id: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "9f4f9f0b-f8d7-4ac3-b01c-5d0d9e87949d",
          rating: 1,
          user_id: 5,
          recipe_id: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "4b6f55cd-3a9e-49f0-9f52-b3aca789eeb1",
          rating: 3,
          user_id: 3,
          recipe_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "aed883af-73e8-4ac1-b159-135f0646920e",
          rating: 3,
          user_id: 2,
          recipe_id: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "8b16ecf8-1f09-47ad-9c0b-5513f957d22a",
          rating: 1,
          user_id: 2,
          recipe_id: 16,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("ratings", null, {});
  },
};
