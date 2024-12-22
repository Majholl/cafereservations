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
    type : "number",
    min : 2,
  },
  capacity : {
    type : "number"
  },
  category : {
    type : "string",
    required : true,
  }
};

const check = v.compile(schema);

module.exports = check;
