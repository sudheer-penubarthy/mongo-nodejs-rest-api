'use strict';

const { ftruncateSync } = require('node:fs');

var mongoose = require('mongoose'),
    Product = mongoose.model('Product');

exports.list_all_products = function(req, res){
    Product.find({}, function(err, product){
        if(err)
            res.send(err);
        res.json(product)
    });
};