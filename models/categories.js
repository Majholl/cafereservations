const mongoose = require("mongoose");

const categoriesModel = mongoose.model("categories" , {
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
    }
})

module.exports = categoriesModel;