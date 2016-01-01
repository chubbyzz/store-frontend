'use strict';

/**
 * @ngdoc overview
 * @name storeApp
 * @description
 * # storeApp
 *
 * Main module of the application.
 */
angular
  .module('storeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default');

    $routeProvider
      .when('/', {
        templateUrl: 'views/product/index.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/product/:name', {
        templateUrl: 'views/product/show.html',
        controller: 'ProductshowCtrl',
        controllerAs: 'productShow'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
