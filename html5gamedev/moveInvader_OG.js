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
var Left = false;
var Right = false;
var Up = false;
var Down = false;

  $(document).keydown(function(e){
 
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);
  
    if (keyIndex > -1 && keyIndex < 4){

      switch( keyIndex ){
    
        case 0: //Left Arrow
          if (Left == false){
            Left = true;
            timer = setInterval(animateInvader, 10); //Call the animateInvader function every 100ms
          }
          break;
    
        case 1: //Up Arrow
          if (Up == false){
            Up = true;
            timer = setInterval(animateInvader, 10); //Call the animateInvader function every 100ms
          }
          break;
    
        case 2: //Right Arrow
          if (Right == false){
            Right = true;
            timer = setInterval(animateInvader, 10); //Call the animateInvader function every 100ms
          }
          break;
    
        case 3: //Down Arrow
          if (Down == false){
            Down = true;
            timer = setInterval(animateInvader, 10); //Call the animateInvader function every 100ms
          }
          break;
    
      }
    }  

  });

  $(document).keyup(function(e){
    
    var keyIndex = jQuery.inArray(e.keyCode, watchKeys);    

    if (keyIndex > -1 && keyIndex < 4){

      switch( keyIndex ){
    
        case 0: //Left Arrow
          alert('left released');
          Left = false;
          break;
    
        case 1: //Up Arrow
          Up = false;
          break;
    
        case 2: //Right Arrow
          Right = false
          break;
    
        case 3: //Down Arrow
          Down = false;
          break;
      }
    }

    clearInterval(timer);

  }); 

  function animateInvader(){
    if (Left){
      (y > 0) ? y -= 15 : y = 0; //Generate a new 'y' coordinate
    }
    if (Right){
      (y < rightEdge) ? y += 15 : y = rightEdge;
    }
    if (Up){
      (x > 0) ? x -= 15 : x = 0;
    }
    if (Down){
      (x < bottomEdge) ? x += 15 : x = bottomEdge;
    }
    invader.css({
      "top" : x,
      "left" : y
    });
  }

  
});
