'use strict';

describe('Service: mainService', function () {

  // load the service's module
  beforeEach(module('blackswanApp'));

  // instantiate service
  var mainService;
  var httpBackend;

  beforeEach(inject(function (_mainService_, $httpBackend) {
    mainService = _mainService_;
    httpBackend = $httpBackend;
  }));

  it('should do something', function () {
    expect(!!mainService).toBe(true);
  });

  it('should list the repositories, per query', inject(function($http) {
    var $scope = {};

    /* Code Under Test */
    $http.get('https://api.github.com/search/repositories?q=asxsaxsax')
    .success(function(data, status, headers, config) {
      $scope.valid = true;
      $scope.response = data;
    })
    .error(function(data, status, headers, config) {
      $scope.valid = false;
    });
    /* End */

    httpBackend
    .when('GET', 'https://api.github.com/search/repositories?q=asxsaxsax')
    .respond(200, {"total_count": 0, "incomplete_results": false, "items": []} );

    httpBackend.flush();

    expect($scope.valid).toBe(true);
    expect($scope.response).toEqual({"total_count": 0, "incomplete_results": false, "items": []});
  }));

});
