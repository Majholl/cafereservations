const mongoose = require('mongoose');

const dbUrl = "mongodb://localhost:27017/cofereservation";

mongoose.connect(dbUrl)
  .then(() => console.log("Server Connected To MongoDB Connected"))
  .catch((err) => console.log(err))
