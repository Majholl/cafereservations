const mongoose = require("mongoose");

const productsModel = mongoose.model("products", {
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  capacity: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
});

module.exports = productsModel;
