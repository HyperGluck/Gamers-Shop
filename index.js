const express = require("express")
const app = express()
const PORT = 8000
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

var products = require("./routes/products.route")
var Users = require("./routes/products.route")
var Cart = require("./routes/products.route")
const path = require('path');


app.listen(PORT, () => console.log("Server started on port ", PORT))

app.use(express.static(path.join(__dirname, "dist/Gamers")));

app.use("/api",products);
app.use("/api",Users);
app.use("/api",Cart);

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "dist/Gamers/index.html"));
});

var mongoose = require('mongoose');

var mongoDB ="mongodb://localhost:27017/Gamers";

mongoose.connect(mongoDB,{useNewUrlParser: true});

