const mongoose = require("mongoose");

let cart = new mongoose.Schema(
    {
       
       SerialNumber: {
        type: String,
    },
       Name: {
           type: String,
       },
       Price:{
           type: Number,
       },
       Category:{
           type: String,
    
       },
       Description:{
           type: String,
       },
       ImgUrl:{
        type: String,
    },
      mail:{
        type: String,
    },
    
    },
{
    collection: "cart",
}   
    );
module.exports = mongoose.model("cart", cart);