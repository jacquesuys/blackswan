'use strict';

describe('Filter: titlecase', function () {

  // load the filter's module
  beforeEach(module('blackswanApp'));

  // initialize a new instance of the filter before each test
  var titlecase;
  beforeEach(inject(function ($filter) {
    titlecase = $filter('titlecase');
  }));

  it('should return the input as titlecase', function () {
    var text = 'angularjs';
    expect(titlecase(text)).toBe('Angularjs');
  });

  it('should return the entire input as titlecase', function () {
    var text = 'this is another test';
    expect(titlecase(text)).toBe('This Is Another Test');
  });

  it('should ignore smallwords', function () {
    var text = 'this is a test for smallwords';
    expect(titlecase(text)).toBe('This Is a Test for Smallwords');
  });

});
