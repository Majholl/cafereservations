// project self files
const config = require("./config");
const db = require("./db");

// internal moudles
const express = require("express");
const path = require("path");
const categoriesRouter = require("./routes/categories");

const app = express();

// Get req.body
app.use(express.json());
app.use(express.urlencoded());

// Access Public
app.use(express.static(path.join(__dirname, "view")));

// Category Routes
app.use("/api/categories", categoriesRouter);

// Server Listening
app.listen(config.port, () => {
  console.log("server is running on ");
});
