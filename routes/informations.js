var informations = require('../models/informations');

var express = require('express');
var router = express.Router();

function getByValue(arr, id) {

  var result  = arr.filter(function(o){return o.id == id;} );

  return result ? result[0] : null; // or undefined

}
 
router.home = function(req, res) {
  //route to handle all angular requests
  res.sendFile('../public/index.ejs'); // load our public/index.ejs file
}

router.findAll = function(req, res) {
  // Return a JSON representation of our list
    res.json(informations);
}

router.addinformation = function(req, res) {
    //Add a new information to our list
    var id = Math.floor((Math.random() * 1000000) + 1);
    informations.push({id : id, paymenttype: req.body.paymenttype, paymenttype1: req.body.paymenttype1, paymenttype2: req.body.paymenttype2, amount: req.body.amount, upvotes: 0});

    res.json({ message: 'Information Added!'});
}
 
router.deleteinformation = function(req, res) {
    //Delete the selected information based on its id
    var information = getByValue(informations,req.params.id);
    var index = informations.indexOf(information);
    informations.splice(index, 1);  

    router.findAll(req,res);
}

router.incrementUpvotes = function(req, res) {
    //Add 1 to upvotes property of the selected information based on its id
    var information = getByValue(informations,req.params.id);
    information.upvotes += 1;

    router.findAll(req,res);      
}

module.exports = router;
