const mongoose = require('mongoose');

const dbUrl = "mongodb://127.0.0.1/cofereservation";

mongoose.connect(dbUrl)
  .then(() => console.log("Server Connected To MongoDB Connected"))
  .catch((err) => console.log(err))
