'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('blackswanApp'));

  var MainCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $routeParams: {repo: 'bootstrap'}
    });
  }));

  it('should have $scope.search', function () {
    expect(!!scope.search).toBe(true);
  });

  it('should have $scope.search be a function', function () {
    expect(typeof scope.search).toBe('function');
  });

  it('should have $scope.accordion', function () {
    expect(!!scope.accordion).toBe(true);
  });

  it('should have $scope.accordion be a function', function () {
    expect(typeof scope.accordion).toBe('function');
  });

  it('should have $scope.toggle to start at 0', function () {
    expect(scope.toggle).toBe(0);
  });

  it('should have $scope.searchInput to be the assigned the routeParam when defined', function () {
    expect(scope.searchInput).toBe('bootstrap');
  });

  it('should have $scope.loading to be active, when a routeParam is defined, via search()', function () {
    expect(scope.loading).toBe(true);
  });

});
