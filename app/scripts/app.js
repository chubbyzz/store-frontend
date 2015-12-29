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
    $mdThemingProvider.theme('default');

    $routeProvider
      .when('/', {
        templateUrl: 'views/product/index.html',
        controller: 'ListCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login/index.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
