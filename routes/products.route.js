var express = require("express")
const Product = require("../models/Product")
const Users = require("../models/Users")
const Cart = require("../models/Cart")

var router = express.Router()



    router.get("/", (req, res) => {
    res.send("Welcome To the server")
    })


    router.get("/getProducts", (req, res) => {
      Product.find((error, data) => {
          res.json(data);
      });

 
     });

     router.get("/getUsers", (req, res) => {
        Users.find((error, data) => {
            res.json(data);
        });
    
  
       });

       
     router.get("/getCart", (req, res) => {
        Cart.find((error, data) => {
            res.json(data);
        });
   
       });

       router.post("/add2Cart", (req, res)=>{
           Cart.create(req.body, (error, data)=>{
               console.log(req.body);
               res.json(data);
           });
       });

       router.post("/register", (req, res)=>{
        Users.create(req.body, (error, data)=>{
            console.log(req.body);
            res.json(data);
        });
    });


       router.delete("/deleteProduct/:SerialNumber", (req, res) => {
        Cart.findOneAndRemove({SerialNumber: req.params.SerialNumber}, (error, data) =>{
            console.log("Product removed")
            res.json(data);
        });
    
        
        });




module.exports = router