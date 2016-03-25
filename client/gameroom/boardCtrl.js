angular
  .module('rts.board', [])
    .controller('Board', [ '$scope', 'BoardLogic', function ($scope, BoardLogic) {

      $scope.box = ['nope1', 'nope2'];
      $scope.test = function () {
        console.log('math');
        console.log(this.box);
        this.box.push("nope"+($scope.box.length+1));
      }

      $scope.board = BoardLogic.board;
      $scope.log = function(row, columb, piece) {
        console.log('first step : ', piece, '--', '['+row+'.'+columb+']');
        if(BoardLogic.currentPiece.piece === null) {
          BoardLogic.currentPiece = {
            piece: piece,
            row: row,
            columb: columb
          };
        }
        else if(BoardLogic.currentPiece.row === row &&
           BoardLogic.currentPiece.columb === columb &&
           BoardLogic.currentPiece.piece === piece) {
            console.log('same piece, reset');
            BoardLogic.currentPiece = BoardLogic.defaultPiece;
        }
        //  -- FIX MY LOGIC --
        // else if (-1 <= BoardLogic.currentPiece.row - row >= 1 &&
        //          -1 <= BoardLogic.currentPiece.columb - columb <= 1 ){
        //   console.log("we can move");
        // }
        else {
          console.log('its a diffrent square your clicking on');
        }

        console.log(BoardLogic.currentPiece);
      }


    }])
