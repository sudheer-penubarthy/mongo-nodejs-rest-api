'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Products');

// list_all_products
exports.list_all_products = function(req, res){
    Product.find({}, function(err, product){
        if(err)
            res.send(err);
        res.json(product)
    });
};

// create_a_product
exports.create_a_product = function(req, res) {
    var new_product = new Product(req.body);
    new_product.save(function(err, product) {
      if (err)
        res.send(err);
      res.json(product);
    });
  };

// get_a_product
exports.get_a_product = function(req, res) {
    Product.findById(req.params("productId"), function(err, product) {
        if(err)
            res.send(err);
        res.json(product);
    });
};

// update_a_product
exports.update_a_product = function(req, res) {
    Product.findByIdAndUpdate({_id: req.params.taskId}, req.body, {new: true}, 
        function(err, product) {
            if(err)
                res.send(err);
            res.json(product);
    });
};


// delete_a_product
exports.delete_a_product = function(req, res) {
    Product.remove({
        _id: req.params.productId
      }, function(err, task) {
        if (err)
          res.send(err);
        res.json({ message: 'Product successfully deleted' });
      });
};