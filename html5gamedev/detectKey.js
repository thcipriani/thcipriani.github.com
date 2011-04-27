$(document).ready(function(){

var watchKeys = [37,38,39,40];
var pressed;

$(document).keydown(function(e){

  var keyIndex = jQuery.inArray(e.keyCode, watchKeys);

  switch( keyIndex ){

    case 0:
      //console.log("Left Arrow");
      pressed = "Left Arrow";
      break;

    case 1:
      //console.log("Up Arrow");
      pressed = "Up Arrow";
      break;

    case 2:
      //console.log("Right Arrow");
      pressed = "Right Arrow";
      break;

    case 3:
      //console.log("Down Arrow");
      pressed = "Down Arrow";
      break;

  }  

  if (keyIndex > -1){
    $("#pressed").text("You pressed the " + pressed);
  }
  
});
});
