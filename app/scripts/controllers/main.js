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
        chart();
      })
      .catch(function(){
        $scope.message = 'An error occurred';
      });
    }

    function chart(index) {
      index = index || 0;
      var ctx = angular.element("#myChart");
      var repo = $scope.repositories.items[index];
      new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: ["Forks", "Starsgazers", "Open Issues", "Watchers"],
          datasets: [{
            label: 'Stats for ' + repo.full_name,
            data: [repo.forks, repo.stargazers_count, repo.open_issues_count, repo.watchers],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            xAxes: [{ ticks: { beginAtZero:true } }]
          }
        }
      });
    }

    if ($routeParams.repo) {
      $scope.searchInput = $routeParams.repo;
      search($routeParams.repo);
    }

    $scope.search = search;

    $scope.accordion = function(index) {
      $scope.toggle = index;
      chart(index);
    };
  });
