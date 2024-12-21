const Validator = require("fastest-validator");

const v = new Validator();

const schema = {
  title: {
    type: "string",
    required: true,
    min: 3,
    max: 30,
  },
  description: {
    type: "string",
    required: true,
  },
  image: {
    type: "string",
  },
  price : {
    type : "string",
    min : 2,
  }
};

const check = v.compile(schema);

module.exports = check;
