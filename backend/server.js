require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const recipeRoutes = require('./routes/recipeRoutes');
const path = require('path');

connectDB();

const app = express();

app.use(express.json());

//Use Routes
app.use('/api/recipes', recipeRoutes)

const PORT = process.env.PORT || 5000;

//Step 3
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

