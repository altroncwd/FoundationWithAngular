angular.module('rts', [
  'ui.router'
])
// see zibzoo for more exmpales of how it works
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
     .state('index', {
        templateUrl: 'main/mainView.html',
        url: '/',
        controller: ['$scope', function ($scope) {
          $scope.test = 1234;
        }]
      })
      .state('game', {
        templateUrl: 'gameroom/game.html',
        url: '/game'
      })

      $urlRouterProvider.otherwise('/');

  })
