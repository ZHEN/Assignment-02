var express = require('express'); // Introduce express framework
var path = require('path'); 
var routes = require('./routes/app');//import routing module
var port = 8000; // Set the port number: 8000
 
var app = express(); //instantiate express
 
var serveStatic = require('serve-static'); // Static file handling
app.use(serveStatic('public')); // path: public
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.listen(port); // Start the web service.
 
var mongoose = require('mongoose'); // Load the mongoose module
mongoose.connect('mongodb://localhost:27017/goods'); // Connect to mongodb local database imovie
console.log('MongoDB connection success!');

 
routes(app);
console.log('server listening at ' + port);
module.exports = app;