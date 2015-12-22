'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('ProductCtrl', function ($scope, productFactory) {
  	$scope.products = productFactory.all();

  });
