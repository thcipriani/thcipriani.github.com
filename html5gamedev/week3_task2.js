const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const GOING_LEFT = 0;
const GOING_RIGHT = 1;
const STAND_STILL = 2;

function SubZero(x, y) {
  this.x = x;
  this.y = y;
  this.width = 60;
  this.height = 110;
  this.animationFrame = 0;
  this.movementDirection = STAND_STILL;
  this.init('images/subZero.png');
}
SubZero.prototype = {
  imgLoaded: false,

  init: function(filename) {
    var self = this;
    this.img = new Image();
    this.img.onload = function() {
      self.imgLoaded = true;
    }
    this.img.src = filename;
  },

  draw: function(ctx) {
    /* This is the key function to understand - define the region from within 
     * running_human_frames.png to clip out and plot to the screen. */
    if (this.imgLoaded) {
      /* animation frame 0 is at x-offset 0, animation frame 1 is at x-offset +64, etc. */
      var spriteOffsetX = 60 * this.animationFrame;

      /* when running left, take first row (y-offset 0) of frames from running_human_frames.png.
       * when running right, take the second row (y-offset 64) and when standing still take
       * the third row (y-offset 2 * 64) */
      var spriteOffsetY = 110 * this.movementDirection;


      /* context.drawImage with nine arguments = draw with clipping.  The arguments are, in order:
       * the image; the left side of the region in the source image to start clipping; the top side
       * of the region in the source image to start clipping; the width and height of the rectangle in
       * the source image to clip; the x and y position on the canvas to plot the clipping; and the
       * width and height of the plotted clipping. */
      ctx.drawImage(this.img, spriteOffsetX, spriteOffsetY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  },

  erase: function(ctx) {
    ctx.clearRect(this.x, this.y, this.width, this.height);
  },

  move: function(dx, dy) {
    this.animationFrame = (this.animationFrame + 1) % 5;
    if (dx < 0) {
      this.movementDirection = GOING_LEFT;
    }
    if (dx > 0) {
      this.movementDirection = GOING_RIGHT;
    }
    this.x += dx;
    this.y += dy;
  },

  idle: function(rightOrLeft) {
    if (rightOrLeft == 'right') {
      this.animationFrame = 1;
    } else {
      this.animationFrame = 0;
    }
    this.movementDirection = STAND_STILL;
  }
};

function Background() {

  this.init();

}

Background.prototype = {

  bgImgLoaded: false,

  fgImgLoaded: false,

  init: function() {
    var self = this;
    this.bgImg = new Image();
    this.bgImg.onload = function() {
      self.bgImgLoaded = true;
    }
    this.bgImg.src = 'images/mk3_bg.png';

    this.fgImg = new Image();
    this.fgImg.onload = function() {
      self.fgImgLoaded = true;
    }
    this.fgImg.src = 'images/mk3_bottom.png';
  },

  drawbg: function(ctx) {
    if (this.bgImgLoaded) {
      ctx.drawImage(this.bgImg, 0, 0, 420, 270);
    }
  },

  drawfg: function(ctx) {
    if (this.fgImgLoaded) {
      ctx.drawImage(this.fgImg, 0, 230, 420, 40);
    }
  }
}

$(document).ready(function() {
  var context = $("canvas")[0].getContext("2d");
  context.strokeStyle = "black";
  context.strokeWidth = 1;

  var leftArrowDown = false;
  var leftDirection = false;
  var rightArrowDown = false;
  var rightDirection = false;

  var human = new SubZero(300, 140);
  var bg = new Background();
  bg.drawbg(context);
  human.draw(context);
  bg.drawfg(context);

  $(document).bind("keydown", function(evt) {
    if (evt.which == LEFT_ARROW) {
      leftArrowDown = true;
      rightDirection = false;
    }
    if (evt.which == RIGHT_ARROW) {
      rightArrowDown = true;
      leftDirection = false;
    }
  });
  $(document).bind("keyup", function(evt) {
    if (evt.which == LEFT_ARROW) {
      leftArrowDown = false;
      leftDirection = true;
    }
    if (evt.which == RIGHT_ARROW) {
      rightArrowDown = false;
      rightDirection = true;
    }
  });

  window.setInterval(function() {
    bg.drawbg(context);
    if (leftArrowDown && !rightArrowDown) {
      human.move(-12, 0);
    } else if (rightArrowDown && !leftArrowDown) {
      human.move(12, 0);
    } else if (rightDirection) {
      human.idle('right');
    } else {
      human.idle('left');
    }
    human.draw(context);
    bg.drawfg(context);
  }, 100);

});
