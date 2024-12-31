const express = require("express");
const productsController = require("../controllers/products");

const productsRouter = express.Router();

// Get All
productsRouter.get("/", productsController.getAll);
// Get One
productsRouter.get("/:title", productsController.getOne);
// Add
productsRouter.post("/add", productsController.add);
// Remove
productsRouter.delete("/delete", productsController.delete);
// Update
productsRouter.put("/:id" , productsController.update)

module.exports = productsRouter;
