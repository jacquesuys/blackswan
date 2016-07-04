'use strict';

/**
 * @ngdoc overview
 * @name blackswanApp
 * @description
 * # blackswanApp
 *
 * Main module of the application.
 */
angular
  .module('blackswanApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:repo', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/issues/:repo/:user', {
        templateUrl: 'views/issues.html',
        controller: 'IssuesCtrl',
        controllerAs: 'issues'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
