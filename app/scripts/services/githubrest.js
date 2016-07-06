'use strict';

/**
 * @ngdoc service
 * @name blackswanApp.githubREST
 * @description
 * # githubREST
 * Factory in the blackswanApp.
 */
angular.module('blackswanApp')
  .factory('githubREST', function($http) {
    var getRepo = function(repo) {
      return $http.get('https://api.github.com/search/repositories?q=' + repo);
    };

    var getIssues = function(user, repo) {
      return $http.get('https://api.github.com/search/issues?q=repo:'+ user + '/' + repo);
    };

    // Public API here
    return {
      getRepo: getRepo,
      getIssues: getIssues
    };
  });
