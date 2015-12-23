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
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212 VIP',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          },
          {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100)+1)
          }
        ];
      }
    };

    // Public API here
    return product;
  });
