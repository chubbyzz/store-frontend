'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('ListCtrl', function ($scope, productFactory) {
  	$scope.products = productFactory.all();

  });
