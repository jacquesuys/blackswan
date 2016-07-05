'use strict';

/**
 * @ngdoc function
 * @name blackswanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackswanApp
 */
angular.module('blackswanApp')
  .controller('MainCtrl', function ($scope, $routeParams, githubREST) {
    $scope.searchInput = '';
    $scope.repositories = '';
    $scope.loading = false;
    $scope.toggle = 0;

    function search(repo) {
      repo = repo || $scope.searchInput;
      $scope.loading = true;

      githubREST.getRepo(repo)
      .then(function success(response){
        $scope.loading = false;
        $scope.repositories = response.data;
        $scope.message = 'Displaying ' + response.data.items.length + ' results for "' + repo + '"';
      });
    }

    if ($routeParams.repo) {
      $scope.searchInput = $routeParams.repo;
      search($routeParams.repo);
    }

    $scope.search = search;

    $scope.accordion = function(index) {
      $scope.toggle = index;
    };
  });
