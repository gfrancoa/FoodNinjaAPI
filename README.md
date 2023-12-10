# Food Ninja API 🥷🍕

<img width="1578" alt="image" src="https://github.com/gfrancoa/FoodNinjaAPI/assets/74123374/302f4861-14da-45b7-9c18-b57cf11cea23">


## Description
API to retrieve and filter recipes, having the capabilities to add them to favorite. Includes authentication and authorization features.

## Technologies
- Node.js
- Express
- Sequelize
- MySQL

## Contributors
Alfredo Parreira - @alfredoparreiras |
Rehman Basharat - @Ray7705 |
Jared Chevalier - @jared-chevalier

## Instructions to run project
1. 💻 Clone the repo and install the dependencies:

```
git clone https://github.com/jared-chevalier/food-ninja.git
```

```
cd food-ninja-api
```

```
npm install
```

2. Create a .env file ⚙️ at the root of the project and add the following:

_Note that your database user, password and port may differ and should be kept private for you._

PORT=8080
DATABASE_HOST="localhost"
DATABASE_HOST_IP="127.0.0.1"
DATABASE_USER=
DATABASE_SCHEMA="food_ninja_db"
DATABASE_PASSWORD=
DATABASE_PORT=
DATABASE_DIALECT="mysql"
SESSION_DURATION=15
SESSION_COOKIE_SECRET=
MAX_FILE_SIZE_MB=5

3. 💻 To start the express server, run the following :

```
npm run dev
```

🌐 Open `http://localhost:8080` and take a look around.

---

## 📂 Steps to create DB, tables and seed the database with dummy data

### Pre-requisites:

- Install MySQL 8.2
- If you want to visualize the database and make sure the script worked install MySQL workbench.

Take into account that the first time you run the api in your local machine, the database will be created, along with the tables.

Then for doing the seeding process you must run the following command in the terminal:

```
npx sequelize-cli db:seed:all
```

The tables that are being seeded are:

- users
- roles
- chefs
- tags
- ingredients
- recipes
- tags_by_recipes
- ingredient_amounts
- ratings
  -reviews
  -favorites

- If you want to create a new seeding file to insert data, run the following command in the terminal, replacing "my-table" with the name of the table:

```
npx sequelize-cli seed:generate --name demo-my-table
```

⚠️ Change the extension of the generated file to .cjs

- If you wish to undo the most recent seed:

```
npx sequelize-cli db:seed:undo
```

- If you wish to undo a specific seed:

```
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```

If you wish to undo all seeds:

```
npx sequelize-cli db:seed:undo:all
```

For more information about the seeding process, check 🧑‍💻:
`https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed`
