'use strict';

describe('Controller: IssuesCtrl', function () {

  // load the controller's module
  beforeEach(module('blackswanApp'));

  var IssuesCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IssuesCtrl = $controller('IssuesCtrl', {
      $scope: scope,
      $routeParams: {repo: 'bootstrap', user: 'twbs'}
    });
  }));

  it('should have $scope.accordion', function () {
    expect(scope.accordion).toBeDefined();
  });

  it('should have $scope.accordion be a function', function () {
    expect(typeof scope.accordion).toBe('function');
  });

  it('should have $scope.toggle be defined', function () {
    expect(scope.toggle).toBeDefined();
  });

  it('should have $scope.toggle to start at 0', function () {
    expect(scope.toggle).toBe(0);
  });

  it('should have $scope.repo to be the assigned the routeParam:repo when defined', function () {
    expect(scope.repo).toBe('bootstrap');
  });

  it('should have $scope.user to be the assigned the routeParam:user when defined', function () {
    expect(scope.user).toBe('twbs');
  });

  it('should have $scope.loading be defined', function () {
    expect(scope.loading).toBeDefined();
  });

  it('should have $scope.loading to be active, when landing on the page', function () {
    expect(scope.loading).toBe(true);
  });

});
