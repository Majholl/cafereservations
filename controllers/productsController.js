const productsModel = require("../models/products");
const productsValidator = require("../validator/productsValidator");

exports.getAll = async (req, res) => {
  const products = await productsModel.find({}).lean();
  res.status(202).json(products);
};

exports.add = async (req, res) => {
    const { title, description, image, capacitty } = req.body;

  if (productsValidator !== true) {
    res.status(400).json({
      message: "price is not valid!",
    });
  } else {
    await productsModel.create({
      title,
      description,
      image,
      capacitty,
    });

    res.status(200).json({
      message: "Price Added Successfully",
    });
  }
};
