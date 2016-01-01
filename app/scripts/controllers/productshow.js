'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:ProductshowCtrl
 * @description
 * # ProductshowCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('ProductshowCtrl', function ($scope, $routeParams, productFactory) {
      $scope.product = productFactory.findBySlug($routeParams.name);
      $scope.product.main = $scope.product.photos[0];
      $scope.changeImage = function(photo) {
          $scope.product.main = photo;
      }
  });
