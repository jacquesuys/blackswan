'use strict';

/**
 * @ngdoc function
 * @name blackswanApp.controller:IssuesCtrl
 * @description
 * # AboutCtrl
 * Controller of the blackswanApp
 */
angular.module('blackswanApp')
  .controller('IssuesCtrl', function ($scope, $http, $route, $routeParams) {
    $scope.issues = '';
    $scope.repo = $routeParams.repo ? $routeParams.repo : 'error';
    $scope.user = $routeParams.user ? $routeParams.user : 'error';
    $scope.loading = true;
    $scope.toggle = 0;

    if ($routeParams.user && $routeParams.repo) {
      $http.get('https://api.github.com/search/issues?q=repo:'+ $routeParams.user + '/' + $routeParams.repo)
      .then(function success(repsonse){
        $scope.loading = false;
        $scope.issues = repsonse.data;
      });
    }

    $scope.accordion = function(index) {
      $scope.toggle = index;
    };
  });
