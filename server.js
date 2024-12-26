const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT;

(async () => {
  await mongoose.connect(process.env.DB_URI);
  console.log("MongoDB Connected");
})();

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}...`);
});
