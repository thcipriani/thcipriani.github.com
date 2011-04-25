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

var position = invader.offset();
var x = position.top; 
var y = position.left;

  console.log(x+", "+y);

  $(document).keydown(function(e){
  
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch( keyIndex ){
    
        case 0: //Left Arrow
          y -= 15;
          break;
    
        case 1: //Up Arrow
          x -= 15;
          break;
    
        case 2: //Right Arrow
          y += 15;
          break;
    
        case 3: //Down Arrow
          console.log(x+", "+y);
          x += 15;
          break;
    
      }  

      console.log(x+", "+y);

      invader.animate({
        "top" : x,
        "left" : y
      }, 40, 'linear');

    }
  
  });
});
