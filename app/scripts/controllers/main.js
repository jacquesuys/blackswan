'use strict';

/**
 * @ngdoc function
 * @name blackswanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackswanApp
 */
angular.module('blackswanApp')
  .controller('MainCtrl', function ($scope, $http, $routeParams) {
    $scope.searchInput = '';
    $scope.repositories = '';
    $scope.loading = false;
    $scope.toggle = 0;

    function Search(repo) {
      repo = repo || $scope.searchInput;

      $scope.loading = true;
      $scope.message = 'Search results for "' + repo + '"';
      $http
      .get('https://api.github.com/search/repositories?q=' + repo)
      .then(function success(response){
        $scope.loading = false;
        $scope.repositories = response.data;
      });
    }

    if ($routeParams.repo) {
      $scope.searchInput = $routeParams.repo;
      Search($routeParams.repo);
    }

    $scope.search = Search;

    $scope.accordion = function(index) {
      $scope.toggle = index;
    };
  });
