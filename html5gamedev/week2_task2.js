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
    
    this.x = dx;
    this.y = dy;

  }

};

//########## Game Board ###############//
  var horz = height/4;
  var vert = width/4;

  ctx.fillStyle = "white";

  for (var i = 0; i < 4; i++){
    ctx.fillRect(0, horz * i, width, 10);
    ctx.fillRect(vert * i, 0, 10, height);
  }


  var player1 = new GamePiece(15, 75, 50);

 $("canvas").click(function(e){

    var x = e.pageX - this.offsetLeft;
    var y = e.pageY- this.offsetTop;

    if (x > player1.x - player1.size && x < player1.x + player1.size && y > player1.y - player1.size && y < player1.y + player1.size)
    {
      alert("player clicked");
    }

  });


});
