const express = require("express");
const categoriesController = require("../controllers/categories")

const categoriesRouter = express.Router();

// Get One And All Categories
categoriesRouter.get("/:title?" , categoriesController.getCategory);

// Add Category
categoriesRouter.post("/add" , categoriesController.addCategory)

module.exports = categoriesRouter