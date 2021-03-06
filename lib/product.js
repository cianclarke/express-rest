var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


var product = new express.Router();
product.use(cors());
product.use(bodyParser());

var productStore = [
  { name : "oranges", origin : "spain" },
  { name : "kiwis", origin : "nz" }
];

product.get('/', function(req, res) {
  // TODO: filter the origin based on req.query
  if (req.query.origin){
    var filteredProducts = [];
    productStore.forEach(function(product){
      if (product.origin === req.query.origin){
        filteredProducts.push(product);
      }
    });  
    return res.json(filteredProducts);
  }
  return res.json(productStore);
});

product.get('/:id', function(req, res) {
  if (req.headers.teapot){
    return res.status(418).end("I am a teapot");
  }
  if (!productStore[req.params.id]){
    return res.status(404).json({ message: "not found" });
  }
  return res.json(productStore[req.params.id]);
});

product.post('/', function(req, res) {
  var newProduct = req.body;
  newProduct.id = productStore.length;
  productStore.push(newProduct);
  return res.json(newProduct);
});


module.exports = product;
