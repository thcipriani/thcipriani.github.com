$(document).ready(function(){

//########### Global Vars ##############//
  var ctx = $("canvas")[0].getContext("2d");
  var height = 400;
  var width = 600;

//########## Player Object ############//
function GamePiece(size, x, y){
  this.size = size;
  this.x = x;
  this.y = y;
  this.init();
}

GamePiece.prototype = {

  dragging : false,

  init : function(){

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();

  },

  move : function(dx, dy){
    ctx.clearRect(this.x - this.size, this.y - this.size, this.size * 4, this.size * 4);
    this.x = dx;
    this.y = dy;
    this.draw();
  },

  draw : function(){
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    drawBoard();
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
  var player1 = new GamePiece(15, 75, 50);

 $("canvas").mousedown(function(e){

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY- this.offsetTop;

    if (x > player1.x - player1.size && x < player1.x + player1.size && y > player1.y - player1.size && y < player1.y + player1.size)
    {
      player1.dragging = true;
      console.log(player1.dragging);
    }

  });

  $("canvas").mousemove(function(e){
    if (player1.dragging){
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY- this.offsetTop;

      player1.move(x, y);
      console.log(x, y);
    }

  });

 $("canvas").mouseup(function(e){

    player1.dragging = false;
    console.log(player1.dragging);


  });


});
