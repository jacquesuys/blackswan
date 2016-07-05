'use strict';

/**
 * @ngdoc function
 * @name blackswanApp.controller:IssuesCtrl
 * @description
 * # AboutCtrl
 * Controller of the blackswanApp
 */
angular.module('blackswanApp')
  .controller('IssuesCtrl', function ($scope, $routeParams, githubREST) {
    $scope.issues = '';
    $scope.repo = $routeParams.repo ? $routeParams.repo : 'error';
    $scope.user = $routeParams.user ? $routeParams.user : 'error';
    $scope.loading = true;
    $scope.message = false;
    $scope.toggle = 0;

    if ($routeParams.user && $routeParams.repo) {
      githubREST.getIssues($routeParams.user, $routeParams.repo)
      .then(function success(repsonse){
        $scope.loading = false;
        $scope.message = true;
        $scope.issues = repsonse.data;
      });
    }

    $scope.accordion = function(index) {
      $scope.toggle = index;
    };
  });
