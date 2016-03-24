angular
  .module('rts.board.logic', [])
    .factory('BoardLogic', ['$scope', '$state', function ($scope, $state) {

      var board = [];
      var makeBoard = function (size) {
        for(var i = 0; i < size; i++) {
          var row = [];
          for(var j = 0; j < size; j++) {
            row.push( {
              peice: null,
              canUse: false
            })
          }
        }
      };

      makeBoard(8);
      console.log('The board : ', board);
      return board;

    }])
