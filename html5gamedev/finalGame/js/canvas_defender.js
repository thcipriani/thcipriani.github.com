$(function(){

var canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d"),
    keysDown = {},
    liveLasers = [];

canvas.height = $(window).height() - 50;
canvas.width = canvas.height/9 * 6;

document.body.appendChild(canvas);

/*
 * Starship Constructor
 * -----------------------------
 */
function Starship(){
  this.x = canvas.width/2 - 20;
  this.y = canvas.height - 45;
  this.width = 40;
  this.height = 40;
  this.speed = 5;
  this.init();
}

Starship.prototype = {
  imgLoaded : false,

  init : function(){
    this.img = new Image();

    var self = this;

    this.img.onload = function(){
      self.imgLoaded = true; 
      self.draw();
    };

    this.img.src = 'images/spaceship.png';
  },

  move: function(dx){
    //ctx.clearRect(this.x, this.y, this.width, this.height);
    var delta = dx * this.speed;
    this.x += delta;
  },

  draw : function(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  },

  fire: function(){
    liveLasers.push(new Laser(this.x + 20));
  }

};

/*
 * Laser Constructor
 * -------------------------------------------------- 
 */

function Laser(x){
  this.x = x;
  this.y = canvas.height - 42;
  this.speed = 5;
  this.height = 12;
  this.width = 2;
}

Laser.prototype = {
  update: function(){
    var delta = this.speed;
    this.y -= delta;
  },
  draw: function(){
    ctx.fillStyle = "#FFFC19";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  checkRemove: function() {
    return this.y < 0;
  }
};

/*
 * Background
 * ---------------------------------
 */
var Outerspace = {
  width: canvas.width,
  height: canvas.height,

  starNum: Math.floor(Math.random() * 50) + 50, //Between 50 and 100 Stars
  starWxH: 2,

  starPos: [],

  init: function(){

          var that = this;

          var arr = [];

          for (var i = 0, numStars = this.starNum; i < numStars; i++){
            var posX = Math.floor(Math.random() * this.width) - this.starWxH;
            var posY = Math.floor(Math.random() * this.height) - this.starWxH;
            arr.push({x: posX, y: posY, w: this.starWxH, h: this.starWxH});
          }

          this.starPos = arr;

          this.draw();
        },

  draw: function(){
    var that = this;

    ctx.fillStyle = "#212121";
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.fillStyle = "white";
    for(var i = 0, starLen = this.starPos.length; i < starLen; i++) {
      ctx.fillRect(that.starPos[i].x, that.starPos[i].y, that.starPos[i].w, that.starPos[i].h);
    }

    for(var i = 0, starLen = this.starPos.length; i < starLen; i++) {
      //ctx.clearRect(that.starPos[i].x, that.starPos[i].y, that.starPos[i].w, that.starPos[i].h);
      that.starPos[i].y += 1;
      if ( that.starPos[i].y > that.height ) {
        that.starPos[i].y = 0;
      }
    }
  },

};

/*
 * Player movement
 * ----------------------------
 */

  $(document).keydown(function(e){

    //console.log(e.keyCode);
    if (e.keyCode === 32) {
      metaDefender.fire();
    }

    if (e.keyCode === 37 || e.keyCode === 39){
      keysDown[e.keyCode] = true;
    } 

  });

  $(document).keyup(function(e){
 
    if (e.keyCode === 37 || e.keyCode === 39){
      delete keysDown[e.keyCode];
    }  

  });

/*
 * Game update
 * -----------------------------
 */
var update = function() {
  if (37 in keysDown && metaDefender.x > 5) {
    metaDefender.move(-1)
  }

  if (39 in keysDown && metaDefender.x < Outerspace.width - 45) {
    metaDefender.move(1)
  }

  for (var i = 0, numLasers = liveLasers.length; i < numLasers; i++) {
    if (!liveLasers[i]) break;
    if (!liveLasers[i].checkRemove()) { 
      liveLasers[i].update();
      liveLasers[i].draw();
    } else {
      liveLasers.splice(i, 1);
    }
  }

};

/*
 * Initialize 
 * ---------------------
 */
Outerspace.init();
var metaDefender = new Starship(); //Player


/*
 * Game Loop
 * ----------------------
 */
var t = setInterval(function(){
    Outerspace.draw();
    update();
    metaDefender.draw();
  }, 1);
});
