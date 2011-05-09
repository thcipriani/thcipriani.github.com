$(document).ready(function(){

//################## Global Variables ###############################|
var watchKeys = [37,38,39,40];

var ctx = $("canvas")[0].getContext("2d");

var up, down, left, right;

//################## Invader Prototype/Object #######################|
function Invader(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.init();
}

Invader.prototype = {
  imgLoaded : false,

  init : function(){
    this.img = new Image();

    var self = this;

    this.img.onload = function(){
      self.imgLoaded = true; 
      self.draw();
    };

    this.img.src = 'images/Invader.png';
  },

  move : function(dx, dy){
    ctx.clearRect(this.x, this.y, this.w, this.h);
    this.x += dx;
    this.y += dy;
    this.draw();
  },

  draw : function(){
    if (this.imgLoaded) {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  }

};

// ################# Background ##############################|
function setStars(){
  var starWxH = 2;
  var ctxWidth = 600;
  var ctxHeight = 400;
  var starNum = Math.floor(Math.random() * 50) + 50; //Between 50 and 100 Stars
  var starPos = [];

  for (var i = 0; i < starNum; i++){
    var posX = Math.floor(Math.random() * ctxWidth) - starWxH;
    var posY = Math.floor(Math.random() * ctxHeight) - starWxH;
    starPos.push(posX, posY, starWxH, starWxH);
  }

  return starPos;
}

function outerSpace(starPos){
  ctx.fillStyle = "white";

  for (i = 0; i < starPos.length; i = i + 4){
      ctx.fillRect(starPos[i], starPos[i + 1], starPos[i + 2], starPos[i + 3]);
  }

}


//################ Initialize ################################|

var pinkInvader = new Invader(100, 100, 50, 50);
var sPos = setStars();
outerSpace(sPos);

// ################ Keydown sets Timer #####################|
  $(document).keydown(function(e){
 
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch(keyIndex){
    
        case 0: //Left Arrow
          clearInterval(left);
          left = setInterval(function(){
            outerSpace(sPos);
            (pinkInvader.x > 0) ? pinkInvader.move(-10, 0) : 0;
          }, 10);
          break;
    
        case 1: //Up Arrow
          clearInterval(up);
          up = setInterval(function(){
            outerSpace(sPos);
            (pinkInvader.y > 0) ? pinkInvader.move(0, -10) : 0;
          }, 10);
          break;
    
        case 2: //Right Arrow
          clearInterval(right);
          right = setInterval(function(){
            outerSpace(sPos);
            (pinkInvader.x < 600 - pinkInvader.w) ? pinkInvader.move(10, 0) : 0;
          }, 10);
          break;
    
        case 3: //Down Arrow
          clearInterval(down);
          down = setInterval(function(){
            outerSpace(sPos);
            (pinkInvader.y < 400 - pinkInvader.h) ? pinkInvader.move(0, 10) : 0;
          }, 10);
          break;
      }

    }  

  });

//########################## Keyup clears timer ###################################|

  $(document).keyup(function(e){
 
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch(keyIndex){
    
        case 0: //Left Arrow
          clearInterval(left);
          break;
    
        case 1: //Up Arrow
          clearInterval(up); 
          break;
    
        case 2: //Right Arrow
          clearInterval(right); 
          break;
    
        case 3: //Down Arrow
          clearInterval(down); 
          break;
      }

    }  

  });

});
