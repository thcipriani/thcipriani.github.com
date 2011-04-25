$(document).ready(function(){

var watchKeys = [37,38,39,40];
var x, y = 0;

  $(document).keydown(function(e){
  
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    switch( keyIndex ){
  
      case 0:
        //console.log("Left Arrow");
        if (x > 0){
          x -= 1;
        } else {
          x = 0;
        }
        break;
  
      case 1:
        if (y > 0){
          y -= 1;
        } else {
          y = 0;
        }
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
  
    $("body").append(x+", "+y);
  
  });
});
