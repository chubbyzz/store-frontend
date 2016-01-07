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
  .config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
    $mdIconProvider.defaultIconSet('/styles/icons/mdi.svg');
    $mdThemingProvider.theme('default')
        // .primaryPalette('blue-grey');
        .primaryPalette('teal');

    $routeProvider
      .when('/', {
        templateUrl: 'views/product/index.html',
        controller: 'MainCtrl'
      })
      .when('/product/:name', {
        templateUrl: 'views/product/show.html',
        controller: 'MainCtrl'
      })
      .when('/entrar', {
        templateUrl: 'views/login/index.html',
        controller: 'MainCtrl'
      })
      .when('/carrinho', {
          templateUrl: 'views/carrinho/index.html',
          controller: 'MainCtrl'
      })
      .when('/registrar', {
          templateUrl: 'views/404.html',
          controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
