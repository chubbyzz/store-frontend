'use strict';

describe('Service: product', function () {

  // load the service's module
  beforeEach(module('storeApp'));

  // instantiate service
  var product;
  beforeEach(inject(function (_product_) {
    product = _product_;
  }));

  it('should do something', function () {
    expect(!!product).toBe(true);
  });

});
