'use strict';

    var canvasWidth = 1000;
    var canvasHeight = 400;
    var hitCounter = 0;

// When the DOM has loaded
$(document).ready(function() {

    // Initialize Crafty
    Crafty.init(canvasWidth,canvasHeight,document.getElementById('game'));
    Crafty.background("black");

    // The box entity
    var box = Crafty.e('Player, 2D, DOM, Color, Twoway, Gravity')
        .attr({x: 500, y: 0, w: 40, h: 40})
        .color('yellow') 
        .twoway(10)
        .gravity('Floor')
        .gravityConst(3);

    // The floor entity
    var floor = Crafty.e('Floor,2D, Canvas, Color')
        .attr({x: 100, y: canvasHeight-10, w: 800, h: 10})
        .color('gray'); 


    // Create text that shows hit count with text font size 30px and bold at position of x: canvasWidth - 70, y:10




// Rain dropping function
function drop()
{   
    // Randomize the x-postition of the rain drop
    

    // Create rain drop entity
    

        // When a rain drop hit the Player, increase the hit counter
        
            // if the hit counter becomes 5, reset the counter and reset the position of the player
            

        // When it hit the floor, destroy it
        
}

// Call "drop" function in order to create many rain drops


});

 
