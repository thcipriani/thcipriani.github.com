$(document).ready(function(){

var watchKeys = [37,38,39,40];
var invader = $("#container > img");

/* Easy way to set invader's position to the middle of the window - 
   using percentages in css mess with 'animate' function */
  invader.css({
    "position" : "relative",
    "top" : $(window).height()/2 - invader.height()/2 + "px",
    "left" : $(window).width()/2 - invader.width()/2 + "px"
    });

var rightEdge = $(window).width() - invader.width();
var bottomEdge = $(window).height() - invader.height();
var position = invader.offset();
var x = position.top; 
var y = position.left;
var moveInvader = false;
var timer;
var Left;
var Right;
var Up;
var Down;

  $(document).keydown(function(e){
  
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch( keyIndex ){
    
        case 0: //Left Arrow
          Left = true;
          timer = setInterval(animateInvader, 10); //Call the animateInvader function every 100ms
          break;
    
        case 1: //Up Arrow
          Up = true;
          timer = setInterval(animateInvader, 10); //Call the animateInvader function every 100ms
          break;
    
        case 2: //Right Arrow
          Right = true;
          timer = setInterval(animateInvader, 10); //Call the animateInvader function every 100ms
          break;
    
        case 3: //Down Arrow
          Down = true;
          timer = setInterval(animateInvader, 10); //Call the animateInvader function every 100ms
          break;
    
      }
    }  

  });

  $(document).keyup(function(){
    Left = false;
    Right = false;
    Down = false;
    Up = false;
    clearInterval(timer);
  }); 

  function animateInvader(){
    if (Left){
      (y > 0) ? y -= 2 : y = 0; //Generate a new 'y' coordinate
    }
    if (Right){
      (y < rightEdge) ? y += 2 : y = rightEdge;
    }
    if (Up){
      (x > 0) ? x -= 2 : x = 0;
    }
    if (Down){
      (x < bottomEdge) ? x += 2 : x = bottomEdge;
    }
    invader.css({
      "top" : x,
      "left" : y
    });
  }

  
});
