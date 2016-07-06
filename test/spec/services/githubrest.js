'use strict';

describe('Service: githubREST', function () {

  // load the service's module
  beforeEach(module('blackswanApp'));

  // instantiate service
  var githubREST, httpBackend;
  beforeEach(inject(function (_githubREST_, $httpBackend) {
    githubREST = _githubREST_;
    httpBackend = $httpBackend;
  }));

  it('should have "getRepo" method', function () {
    expect(githubREST.getRepo).toBeDefined();
  });

  it('should list "getRepo", per query', inject(function($http) {
    var $scope = {};

    /* Code Under Test */
    $http.get('https://api.github.com/search/repositories?q=asxsaxsax')
    .success(function(data, status, headers, config) {
      $scope.status = status;
      $scope.response = data;
    })
    .error(function(data, status, headers, config) {
      $scope.status = false;
    });
    /* End */

    httpBackend
    .when('GET', 'https://api.github.com/search/repositories?q=asxsaxsax')
    .respond(200, {"total_count": 0, "incomplete_results": false, "items": []} );

    httpBackend.flush();

    expect($scope.status).toBe(200);
    expect($scope.response).toEqual({"total_count": 0, "incomplete_results": false, "items": []});
  }));

  it('should have "getIssues" method', function () {
    expect(githubREST.getIssues).toBeDefined();
  });

  it('should list the "getIssues", per query', inject(function($http) {
    var $scope = {};

    /* Code Under Test */
    $http.get('https://api.github.com/search/issues?q=repo:twbs/repo')
    .success(function(data, status, headers, config) {
      $scope.status = status;
    })
    .error(function(data, status, headers, config) {
      $scope.status = false;
    });
    /* End */

    httpBackend
    .when('GET', 'https://api.github.com/search/issues?q=repo:twbs/repo')
    .respond(200, {"total_count": 0, "incomplete_results": false, "items": []} );

    httpBackend.flush();

    expect($scope.status).toBe(200);
  }));

});
