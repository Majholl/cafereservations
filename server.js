// project self files
const config = require("./config");
const db = require("./db");
const cors = require("cors")

// internal moudles
const express = require("express");
const path = require("path");
const categoriesRouter = require("./routes/categories");
const productsRouter = require("./routes/productsRoutes");
const { error } = require("console");
const { type } = require("os");

const app = express();

// use corse
app.use(cors())

// Get req.body
app.use(express.json());
app.use(express.urlencoded());

// Access Public
app.use(express.static(path.join(__dirname, "view")));

// Category Routes
app.use("/api/categories", categoriesRouter);  

// Products Routes
app.use("/api/products" , productsRouter);

// Not Fond page
app.use((req,res) => {
  return res.status(404).json({
    error : {
      type : "not found",
      message : "page Not Foun!"
    }
  })
});

// Error Handling
app.use((err,req,res,next) => {
  res.json({
    statusCode : err.status || 500,
    message : err.message || "Server Error!"
  })
})

// Server Listening
app.listen(config.port, () => {
  console.log("server is running on ");
});

