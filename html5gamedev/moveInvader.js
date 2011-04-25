$(document).ready(function(){

var watchKeys = [37,38,39,40];
var x = 0, y = 0;

  $(document).keydown(function(e){
  
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch( keyIndex ){
    
        case 0:
          (x > 0) ? x-=1 : x = 0;
          //console.log("Left Arrow");
          break;
    
        case 1:
          (y > 0) ? y-=1 : y=0;
          //console.log("Up Arrow");
          break;
    
        case 2:
          x += 1;
          //console.log("Right Arrow");
          break;
    
        case 3:
          y += 1;
          //console.log("Down Arrow");
          break;
    
      }  

      console.log(x+", "+y+" | ");

      $("#container > img").css({
        "top" : x,
        "left" : y
      });

    }
  
  });
});
