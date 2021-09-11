require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const recipeRoutes = require('./routes/recipeRoutes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/recipes', recipeRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

