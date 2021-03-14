'use strict';
module.exports = function(app) {
  var ProductList = require('../controllers/ProductListController');

  // ProductList Routes
  app.route('/products')
    .get(ProductList.list_all_products)
    .post(ProductList.create_a_product);


  app.route('/products/:productId')
    .get(ProductList.get_a_product)
    .put(ProductList.update_a_product)
    .delete(ProductList.delete_a_product);
};

