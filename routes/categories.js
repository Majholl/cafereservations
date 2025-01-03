const express = require("express");
const categoriesController = require("../controllers/categories")

const categoriesRouter = express.Router();

// Get One And All Categories
categoriesRouter.get("/:title?" , categoriesController.getCategory);

// Add Category
categoriesRouter.post("/add" , categoriesController.addCategory)

// Remove Category
categoriesRouter.route("/:id").delete(categoriesController.removeCategory).put(categoriesController.updateCategory);

// Get Products By Category
categoriesRouter.get("/:title/products" , categoriesController.getProductsByCategory);

module.exports = categoriesRouter