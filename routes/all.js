var express = require('express');
var router = express.Router();
var goods = require('../models/person.js'); // Load the mongoose compiled model movie
 
router.get('/', function(req, res) {

goods.fetch(function(err, goods) {
if (err) {
console.log(err);
}
res.render('all',{
goods: goods
})
})
})
 
module.exports = router;