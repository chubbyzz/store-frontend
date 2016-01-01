'use strict';

describe('Controller: ProductshowCtrl', function () {

  // load the controller's module
  beforeEach(module('storeApp'));

  var ProductshowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductshowCtrl = $controller('ProductshowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductshowCtrl.awesomeThings.length).toBe(3);
  });
});
