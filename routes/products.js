const express = require("express");
const productsController = require("../controllers/products");
const uploader = require("../utils/uploader");
const multer = require("multer")

const productsRouter = express.Router();

// Get All
productsRouter.get("/", productsController.getAll);
// Get One
productsRouter.get("/:title", productsController.getOne);
// Add
productsRouter.post(
  "/add",
  multer({ storage: uploader, limits: { fileSize: 300000 } }).single("image"),
  productsController.add
);
// Remove
productsRouter.delete("/delete", productsController.delete);
// Update
productsRouter.put("/:id", productsController.update);

module.exports = productsRouter;
