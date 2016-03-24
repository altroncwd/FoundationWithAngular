angular.module('rts', [
  // put all the module dependancies in here
  // main page information-logic
  'ui.router',
  'ngAnimate',
  'rts.logic'
  // I'll need one for the game board-room
  // chess peices
  // socketfactory ex...
])
// see zibzoo for more exmpales of how it works
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('landing', {
        templateUrl: 'index.html',
        url: '/',
        controller: 'About'
      });

      $urlRouterProvider.otherwise('/');

  })
