angular
  .module('rts.board', [])
    .controller('Board', [ '$scope', 'BoardLogic', function ($scope, BoardLogic) {

      $scope.box = ['nope1', 'nope2'];

      $scope.test = function () {
        console.log('math');
        console.log(this.box);
        this.box.push("nope"+($scope.box.length+1));
      }

    }])

