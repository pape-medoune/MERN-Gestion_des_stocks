const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;
const dbName="crud";
const collectionName = "produits";
const PORT = 4400;
const mongoUrl="mongodb://localhost:27017"

const app = express();


mongoClient.connect(mongoUrl,(err)=>{
    console.log("Connexion fait avec succés!");
})


app.listen(PORT,()=>{
    console.log("Bonjour Mouhamedoune fall")
});