require("dotenv").config();

const recipeData = require("./data/recipes");
const connectDB = require("./config/db");
const Recipe = require("./models/Recipe");

connectDB();

const importData = async () => {
  try {
    await Recipe.deleteMany({});

    await Recipe.insertMany(recipeData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();