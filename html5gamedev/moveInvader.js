$(document).ready(function(){

//################## Global Variables ###############################|
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

var Left = false;
var LeftTimer;
var Right = false;
var RightTimer;
var Up = false;
var UpTimer;
var Down = false;
var DownTimer;

var position = invader.offset();
var x = position.top; 
var y = position.left;

//################# Key Down Listener ##############################|
  $(document).keydown(function(e){
 
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch( keyIndex ){
    
        case 0: //Left Arrow
          Left = true;
          break;
    
        case 1: //Up Arrow
          Up = true;
          break;
    
        case 2: //Right Arrow
          Right = true;
          break;
    
        case 3: //Down Arrow
          Down = true;
          break;
      }

      setTimers();

    }  

  });

//################# Key Up Listener ##############################|
  $(document).keyup(function(e){
    

    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch( keyIndex ){
    
        case 0: //Left Arrow
          clearInterval(LeftTimer);
          LeftTimer = false;
          Left = false;
          break;
    
        case 1: //Up Arrow
          clearInterval(UpTimer);
          UpTimer = false;
          Up = false;
          break;
    
        case 2: //Right Arrow
          clearInterval(RightTimer);
          RightTimer = false;
          Right = false;
          break;
    
        case 3: //Down Arrow
          clearInterval(DownTimer);
          DownTimer = false;
          Down = false;
          break;
      }
    }  

  }); 

//################# Funcitons For Movement ##############################|
function setTimers(){
  if (Left && !LeftTimer){
    LeftTimer = setInterval(function(){
      (y > 5) ? y -= 5 : y = 0;
    },1);
  }
  
  if (Right && !RightTimer){
    RightTimer = setInterval(function(){
      (y < rightEdge - 5) ? y += 5 : y = rightEdge;
    },1);
  }

  if (Up && !UpTimer){
    UpTimer = setInterval(function(){
      (x > 5) ? x -= 5 : x = 0;
    },1);
  }

  if (Down && !DownTimer){
    DownTimer = setInterval(function(){
      (x < bottomEdge - 5) ? x += 5 : x = bottomEdge;
    },1);
  }
}

//################# Take Movement Functions and Move Some Ish ############|

  setInterval(function(){
    invader.css({
      "top" : x,
      "left" : y
    });
  },10);


});
