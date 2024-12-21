const mongoose = require("mongoose");

const productsModel = mongoose.model("products" , {
    id : {
        type : Number
    },
    title : {
        type : String,
        require : true,
    } , 
    description : {
        type : String,
        require : true,
    },
    price : {
        type : Number,
        require : true,
    },
    image : {
        type : "string",
        require : true,
    },
    capacity : {
        type : Number,
        require : true,
    }
})

module.exports = productsModel;