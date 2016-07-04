'use strict';

/**
 * @ngdoc function
 * @name blackswanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blackswanApp
 */
angular.module('blackswanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.test = 'test';

    $scope.searchInput = '';

    $scope.logger = function() {
      console.log($scope.searchInput);
    };
  });
