
const mongoose = require("mongoose");

let Users = new mongoose.Schema(
{
 
   name: {
    type: String,
},
   email: {
       type: String,
   },
   password:{
       type: String,
   },
   pele:{
    type: String,
   }
},
 {
     collection: "users",
 }





);
module.exports = mongoose.model("users", Users);