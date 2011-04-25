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

  $(document).keydown(function(e){
  
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch( keyIndex ){
    
        case 0: //Left Arrow
          (y > 0) ? y -= 15 : y = 0;
          break;
    
        case 1: //Up Arrow
          (x > 0) ? x -= 15 : x = 0;
          break;
    
        case 2: //Right Arrow
          (y < rightEdge) ? y += 15 : y = rightEdge;
          break;
    
        case 3: //Down Arrow
          (x < bottomEdge) ? x += 15 : x = bottomEdge;
          break;
    
      }  

      invader.animate({
        "top" : x,
        "left" : y
      }, 40, 'linear');

    }
  
  });
});
