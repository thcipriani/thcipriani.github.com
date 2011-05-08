$(document).ready(function(){

//################## Global Variables ###############################|
var watchKeys = [37,38,39,40];

var left, right, up, down;

var ctx = $("canvas")[0].getContext("2d");

//################## Invader Prototype/Object #######################|
function Invader(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

Invader.prototype = {

  img : 'images/Invader.png',

  move : function(dx, dy){
    ctx.clearRect(this.x, this.y, this.w, this.h);
    this.x += dx;
    this.y += dy;
    this.draw();
  },

  draw : function(){
    var img = new Image();

    var self = this;

    img.onload = function(){
      ctx.drawImage(img, self.x, self.y, self.w, self.h);
    };

    img.src = this.img;

  }
};

var pinkInvader = new Invader(70, 70, 50, 50);
pinkInvader.draw();

  $(document).keydown(function(e){
 
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch(keyIndex){
    
        case 0: //Left Arrow
          left = setInterval(function(){
            pinkInvader.move(-10,0);
          }, 10);
          break;
    
        case 1: //Up Arrow
          up = setInterval(function(){
            pinkInvader.move(0, -10);
          }, 10);
          break;
    
        case 2: //Right Arrow
          right = setInterval(function(){
            pinkInvader.move(10, 0);
          }, 10);
          break;
    
        case 3: //Down Arrow
          down = setInterval(function(){
            pinkInvader.move(0, 10);
          }, 10);
          break;
      }

    }  

  });

  $(document).keyup(function(e){
 
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch(keyIndex){
    
        case 0: //Left Arrow
          if (left){
            clearInterval(left);
          }
          break;
    
        case 1: //Up Arrow
          if (up){
            clearInterval(up); 
          }
          break;
    
        case 2: //Right Arrow
          if (right){
            clearInterval(right); 
          }
          break;
    
        case 3: //Down Arrow
          if (down){
            clearInterval(down); 
          }
          break;
      }

    }  

  });

});
