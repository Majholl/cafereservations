const productsModel = require("../models/products");
const productsValidator = require("../validator/productsValidator");
const mongoose = require("mongoose")


exports.getAll = async (req, res) => {
  try {
    const products = await productsModel.find({}).lean();
    res.status(202).json(products);
  } catch (error) {
    res.status(500).json({ 
      message: "An error occurred while fetching products." });
  }
};



exports.getOne = async (req , res)=>{
  try {
      const {title} = req.params ;
      const product = await productsModel.findOne({title : title}).lean();
      console.log(product)
      if (!product){
        return res.status(404).json({message:"product is not found"})
      }
        
      res.status(200).json(product)
     
      

    }catch (error){
      res.status(500).json({message : "An error occurred while fetching products."})
    };

}
    
    






exports.add = async (req, res) => {
  try {
    const { title, description, image, capacity, price , category} = req.body;

  const validationResult = productsValidator({
    title,
    description,
    image,
    capacity,
    price,
    category
  });

  if (validationResult !== true) {
    return res.status(400).json({
      message: "Products data is not valid!",
    });
  }

  await productsModel.create({
    title,
    description,
    image,
    capacity,
    price,
    category
  });

  res.status(200).json({
    message: "Product added successfully!",
  });
  } catch {
    res.status(500).json({
      message : "Error in add products"
    })
  }
};




// Controller function to delete a product by its ID
exports.delete = async (req, res) => {
  try {
    // Extract the product ID from the request body
    const { id } = req.body;

    // Validate the product ID to ensure it is a valid MongoDB ObjectId
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "ID is not valid!",
      });
    }

    // Attempt to delete the product using the ID
    const result = await productsModel.findByIdAndDelete(id);


    // Check if the product was found and deleted
    if (!result) {
      return res.status(404).json({
        message: "Product not found!",
      });
    }

    // If successful, return a 200 status with a success message
    res.status(200).json({
      message: "Product Deleted Successfully",
    });

  } catch (error) {
    // Handle any errors that occur during the deletion process
    res.status(500).json({
      message: "An error occurred while deleting the product",
      error: error.message,
    });
  }
};

