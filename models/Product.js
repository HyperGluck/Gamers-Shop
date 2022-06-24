const mongoose = require("mongoose");

let Product = new mongoose.Schema(
{
   productId :{
       type: Number,
       unique: true,
   },
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

},
 {
     collection: "products",
 }





);
module.exports = mongoose.model("products", Product);