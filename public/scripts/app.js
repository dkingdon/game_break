
angular
  .module('games', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/templates/gamesIndex.html',
        controllerAs: 'gameIndexCtrl',
        controller: 'GameIndexController'
      })
      .when('/ttt', {
        templateUrl: '/views/templates/ticTacToe.html',
        controllerAs: 'tttCtrl',
        controller: 'ticTacToeController'
      })
      .when('/hangman', {
        templateUrl: '/views/templates/hangman.html',
        controllerAs: 'hangmanCtrl',
        controller: 'hangmanController'
      })
      .when('/memory', {
        templateUrl: '/views/templates/memory.html',
        controllerAs: 'memoryCtrl',
        controller: 'memoryController'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  } //END OF CONTROLLER
