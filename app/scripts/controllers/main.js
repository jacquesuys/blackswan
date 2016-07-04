'use strict';

/**
 * @ngdoc function
 * @name blackswanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackswanApp
 */
angular.module('blackswanApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.test = 'test';
    $scope.searchInput = '';
    $scope.data = '';

    $scope.search = function() {
      $scope.message = 'Search results for "' + $scope.searchInput + '"';
      $http
      .get('https://api.github.com/search/repositories?q=' + $scope.searchInput)
      .then(function success(response){
        $scope.data = response.data;
      });
    };
  });
