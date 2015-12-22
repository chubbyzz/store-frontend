'use strict';

/**
 * @ngdoc service
 * @name storeApp.product
 * @description
 * # product
 * Factory in the storeApp.
 */
angular.module('storeApp')
  .factory('productFactory', function() {
    // Service logic
    // ...

    var product = {
      all: function(){
        return [
          1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
        ];
      }
    };

    // Public API here
    return product;
  });