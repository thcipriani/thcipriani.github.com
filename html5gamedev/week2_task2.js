$(document).ready(function(){

//########### Global Vars ##############//
  var ctx = $("canvas")[0].getContext("2d");
  var height = 400;
  var width = 600;

//########## Player Object ############//
function GamePiece(size, x, y, color){
  this.size = size;
  this.x = x;
  this.y = y;
  this.color = color;
  this.init();
}

GamePiece.prototype = {

  dragging : false,

  init : function(){

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

  },

  move : function(dx, dy){
    ctx.clearRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
    this.x = dx;
    this.y = dy;
    this.draw();
  },

  draw : function(){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  }

};

//########## Game Board ###############//
  function drawBoard(){
    var horz = height/4;
    var vert = width/4;

    ctx.fillStyle = "white";

    for (var i = 0; i < 4; i++){
      ctx.fillRect(0, horz * i, width, 10);
      ctx.fillRect(vert * i, 0, 10, height);
    }
  }

  drawBoard();
  var player1 = new GamePiece(15, 75, 50, "Purple");
  var player2 = new GamePiece(15, 75, 150, "Green");
  var playerArray = [player1, player2];

 $("canvas").mousedown(function(e){

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY- this.offsetTop;

    for (var i = 0; i < playerArray.length; i++){
      if (x > playerArray[i].x - playerArray[i].size && x < playerArray[i].x + playerArray[i].size && y > playerArray[i].y - playerArray[i].size && y < playerArray[i].y + playerArray[i].size)
      {
        playerArray[i].dragging = true;
        console.log(playerArray[i].dragging);
      }
    }

    

  });

  $("canvas").mousemove(function(e){
    for (var i = 0; i < playerArray.length; i++){
      if (playerArray[i].dragging){
        drawBoard();
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY- this.offsetTop;

        playerArray[i].move(x, y);
        console.log(x, y);
      }
        playerArray[i].draw();
    }

  });

 $("canvas").mouseup(function(e){

    for (var i = 0; i < playerArray.length; i++){
      playerArray[i].dragging = false;
      console.log(playerArray[i].dragging);
    }


  });


});
