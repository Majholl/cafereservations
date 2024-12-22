const productsModel = require("../models/products");
const productsValidator = require("../validator/productsValidator");
const mongoose = require("mongoose")

exports.getAll = async (req, res) => {
  const products = await productsModel.find({}).lean();
  res.status(202).json(products);
};

exports.add = async (req, res) => {
  const { title, description, image, capacity, price , category} = req.body;

  const validationResult = productsValidator({
    title,
    description,
    image,
    capacity,
    price,
    category
  });

  if (validationResult !== true) {
    return res.status(400).json({
      message: "Products data is not valid!",
    });
  }

  await productsModel.create({
    title,
    description,
    image,
    capacity,
    price,
    category
  });

  res.status(200).json({
    message: "Product added successfully!",
  });
};



// Controller function to delete a product by its ID
exports.delete = async (req, res) => {
  try {
    // Extract the product ID from the request body
    const { id } = req.body;

    // Validate the product ID to ensure it is a valid MongoDB ObjectId
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "ID is not valid!",
      });
    }

    // Attempt to delete the product using the ID
    const result = await productsModel.findByIdAndDelete(id);


    // Check if the product was found and deleted
    if (!result) {
      return res.status(404).json({
        message: "Product not found!",
      });
    }

    // If successful, return a 200 status with a success message
    res.status(200).json({
      message: "Product Deleted Successfully",
    });

  } catch (error) {
    // Handle any errors that occur during the deletion process
    res.status(500).json({
      message: "An error occurred while deleting the product",
      error: error.message,
    });
  }
};

