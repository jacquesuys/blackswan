'use strict';

/**
 * @ngdoc directive
 * @name blackswanApp.directive:accordion
 * @description
 * # accordion
 */
angular.module('blackswanApp')
  .directive('accordion', function () {
    return {
      templateUrl: 'views/repos.html'
    };
  })
  .directive('panelHeading', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="panel-heading">'+
        '<h4 class="panel-title" ng-click="accordion($index)">'+
          '<div ng-transclude></div>'+
        '</h4>'+
      '</div>'
    };
  })
  .directive('panelCollapse', function () {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      template: '<div class="panel-collapse collapse {{ $index === toggle ? \'in\' : \'\' }}">'+
        '<div class="panel-body">'+
          '<div ng-transclude></div>'+
        '</div>'+
      '</div>'
    };
  });
