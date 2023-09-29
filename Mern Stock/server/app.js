require('./models/db'); 
const cors = require("cors");
const helmet = require('helmet');
const express =require('express'); 
const bodyparser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;
const client = new MongoClient("mongodb://127.0.0.1:27017/gestionstock");

const multer = require('multer');

var app= express();
 

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Les méthodes HTTP autorisées
  allowedHeaders: ['Content-Type', 'Authorization'] // Les en-têtes autorisés
}));

app.use(helmet());

const cspConfig = {
  directives: {
    defaultSrc: ["'self'", "http://localhost:4400"],
    imgSrc: ["'self'", "http://localhost:4400"],
  },
};

app.use(helmet.contentSecurityPolicy(cspConfig));


 
app.use(express.json());

app.use(bodyparser.urlencoded({
    extended:true
}));

app.use(bodyparser.json());

app.use(express.json());


app.get('/display', (req, res) => {
  const dbname = 'gestionstock';
  const dbn = client.db(dbname);

  dbn
    .collection('produits')
    .find()
    .toArray()
    .then((result) => {
      console.log("L'affichage s'est fait avec succès");
      // Send the result as a response to the client
      res.json(result);
      
    })
    .catch((err) => {
      console.error(err);
      // Handle the error and send an error response if necessary
      res.status(500).json({ error: 'An error occurred' });
    });
});


const photo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
    cb(null, "../src/assets/imagesProduits");
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname);
  },
});

const upload = multer({
  storage: photo,
});

app.put("/maj", upload.single("image"), (req, res) => {
  const dbName = "gestionstock";
  const collectionName = "produits";
  const dbn = client.db(dbName);
  
  // Debugging: Log request parameters and body
  console.log("Request parameters (id):", req.query.id);
  console.log("Request body:", req.body);
  
  const { nomproduit, description, prix } = req.body;
  const image = req.file ? req.file.filename : null;

  dbn.collection(collectionName).findOneAndUpdate(
    { _id: new ObjectId(req.query.id) },
    {
      $set: {
        nomproduit,
        description,
        prix,
        image,
      },
    }
  )
  .then((result) => {
    // Debugging: Log the result of the update operation
    console.log("Update result:", result);

    if (result.value) {
      console.log("La mise à jour s'est faite avec succès!");
      res.json({ message: "Update successful" });
    } else {
      console.log("Aucun produit trouvé pour la mise à jour.");
      res.status(404).json({ error: "Product not found for update." });
    }
  })
  .catch((err) => {
    // Debugging: Log any errors that occur
    console.log("Erreur lors de la mise à jour du produit:", err);
    res.status(500).json({ error: "An error occurred during the update." });
  });
});



app.post("/add", upload.single("image"), (req, res) => {
  const dbname = 'gestionstock';
  const dbn = client.db(dbname);

  const { nomproduit, description, prix } = req.body;
  const image = req.file ? req.file.filename : null;

  console.log(req.file);
  console.log(req.body);
  dbn
    .collection('produits')
    .insertOne({ nomproduit, description, prix, image })
    .then((result) => {
      console.log("L'insertion s'est faite avec succès");
      res.json(result);  
    })
    .catch((err)=>{
      console.log("Erreur lors de l'insertion: "+err);
    });
});

app.listen(4400,()=>{
    console.log('Express server started at port : 4400');
}) 