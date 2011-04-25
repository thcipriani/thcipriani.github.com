$(document).ready(function(){

var watchKeys = [37,38,39,40];
var invader = $("#container > img");
var position = invader.position();
var x = position.left, y = position.top;

  $(document).keydown(function(e){
  
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch( keyIndex ){
    
        case 0:
          (y > 0) ? y-=15 : y=0;
          //console.log("Left Arrow");
          break;
    
        case 1:
          (x > 0) ? x-=15 : x = 0;
          //console.log("Up Arrow");
          break;
    
        case 2:
          y += 15;
          //console.log("Right Arrow");
          break;
    
        case 3:
          x += 15;
          //console.log("Down Arrow");
          break;
    
      }  

      console.log(x+", "+y);

      invader.animate({
        "top" : x,
        "left" : y
      }, 10);

    }
  
  });
});
