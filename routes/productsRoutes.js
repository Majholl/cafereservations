const express = require("express");
const productsController = require("../controllers/productsController")

const productsRouter = express.Router();

// Get All
productsRouter.get("/" , productsController.getAll);
// Get One

// Add
productsRouter.post("/add" , productsController.add);
// Remove


module.exports = productsRouter