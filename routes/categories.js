const express = require("express");
const categoriesController = require("../controllers/categories");
const uploader = require("../utils/uploader");
const multer = require("multer");

const categoriesRouter = express.Router();

// Get One And All Categories
categoriesRouter.get("/:title?", categoriesController.getCategory);

// Add Category
categoriesRouter.post(
  "/add",
  multer({ storage: uploader, limits: { fileSize: 300000 } }).single("image"),
  categoriesController.addCategory
);

// Remove Category
categoriesRouter
  .route("/:id")
  .delete(categoriesController.removeCategory)
  .put(categoriesController.updateCategory);

// Get Products By Category
categoriesRouter.get(
  "/:title/products",
  categoriesController.getProductsByCategory
);

module.exports = categoriesRouter;
