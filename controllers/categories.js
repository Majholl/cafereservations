const categoriesModel = require("../models/categories");
const categoryValidation = require("../validator/categoryValidator");
const productsModel = require("../models/products");
const { isValidObjectId } = require("mongoose");

exports.getCategory = async (req, res) => {
  try {
    if (req.params.title) {
      const { title } = req.params;

      const category = await categoriesModel.findOne({ title: title });

      if (!category) {
        return res.status(404).json({
          message: "category not found",
        });
      }

      res.status(202).json(category);
    } else {
      const categories = await categoriesModel.find({}).lean();

      return res.json(categories);
    }
  } catch (error) {
    res.status(500).json({
      message: "Error in get categories",
    });
  }
};


exports.addCategory = async (req, res) => {
  try {
    const validationResult = req.body
    const { title, description } = req.body;

    if (!validationResult) {
      res.status.json({
        message : "Data is not valid"
      })
    }

    await categoriesModel.create({
      title,
      description,
      image: req.file.filename,
    });

    res.status(201).json({
      message: "Category Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in add category",
    });
  }
};

exports.removeCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      res.status(400).json({
        message: "CategoryID is not valid !!",
      });
    }

    const removeCategory = await categoriesModel.findOneAndDelete({ _id: id });

    if (!removeCategory) {
      return res.status(404).json({
        message: "Category not found !!",
      });
    }

    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;

    if (!isValidObjectId(id)) {
      res.status(400).json({
        message: "CategoryID is not valid !!",
      });
    }

    const updateCategory = await categoriesModel.findOneAndUpdate(
      { _id: id },
      {
        title,
        description,
        image,
      }
    );

    if (!updateCategory) {
      return res.status(404).json({
        message: "Category not found !!",
      });
    }

    res.status(200).json({
      message: "Category updated successfylly",
      updateCategory,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getProductsByCategory = async (req, res) => {
  const category = await categoriesModel.findOne({ title: req.params.title });

  if (!category) {
    return res.status(404).json({
      message: "Category not found !!",
    });
  }

  const products = await productsModel.find({ category: category.title });

  if (!products) {
    res.json([]);
  }

  return res.json(products);
};
