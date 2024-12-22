const categoriesModel = require("../models/categories");
const categoryValidation = require("../validator/categoryValidator");

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
    const validationResult = categoryValidation(req.body);

    const { title, description, image } = req.body;

    if (validationResult !== true) {
      return res.status(422).json({
        message: "Data is not valid",
      });
    } else {
      await categoriesModel.create({
        title,
        description,
        image,
      });

      res.status(201).json({
        message: "Category Added Successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error in add category",
    });
  }
};
