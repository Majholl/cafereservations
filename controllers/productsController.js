const productsModel = require("../models/products");
const productsValidator = require("../validator/productsValidator");

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
