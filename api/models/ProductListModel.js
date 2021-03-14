
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the product'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  productType: {
    type: [{
      type: String,
      enum: ['stationary', 'mobile', 'baby care']
    }],
    default: ['others']
  }
});

module.exports = mongoose.model('Products', ProductSchema);

