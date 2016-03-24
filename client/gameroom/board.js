angular
  .module('rts.board')
    .controller('Board', ['$scope', function ($scope) {

      $scope.board = [1, 2, 3, 4, 5, 6, 7, 8];

    }])
