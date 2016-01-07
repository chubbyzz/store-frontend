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
    var product = {
        all: function() {
          return [{
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212 VIP',
            slug: '212-vip',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }, {
            photo: 'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          }];
      },
        findBySlug: function(slug) {
          return  {
            photos: [
                    'http://i.mlcdn.com.br/470x352/carolina-herrera-212-vip-menperfume-masculino-eau-de-toilette-50-ml-207457300.jpg',
                    'http://mlb-s2-p.mlstatic.com/perfume-212-vip-men-carolina-herrera-100ml-importado-usa-4011-MLB4894212166_082013-F.jpg',
                    'http://i.mlcdn.com.br/1500x1500/carolina-herrera-212-menperfume-masculino-eau-de-toilette-50-ml-207064600.jpg',
                    'http://www.exaleperfumes.com.br/media/catalog/product/cache/1/image/590x590/9df78eab33525d08d6e5fb8d27136e95/p/e/perfume-carolina-herrera-212-men-masculino-edt.jpg'
                ],
            name: '212',
            slug: '212',
            price: 320,
            variance: 320 * (((Math.floor(Math.random() * 30) + 20) / 100) + 1)
          };
      },

    };

    // Public API here
    return product;
  });
