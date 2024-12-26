const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const categoriesModel = mongoose.model("categories", categoriesSchema);

module.exports = categoriesModel;
