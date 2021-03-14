var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/ProductListModel'), //created model loading here
  bodyParser = require('body-parser');
  
  // mongoose instance connection url connection
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/shoppingCartDB'); 
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // For 404 redirection
  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  
  
  var routes = require('./api/routes/ProductListRoutes'); //importing route
  routes(app); //register the route
  
  app.listen(port);

console.log('Product list RESTful API server started on: ' + port);
