'use strict';

    var canvasWidth = 1000;
    var canvasHeight = 400;
    var hitCounter = 0;

// When the DOM has loaded
$(document).ready(function() {

    // Initialize Crafty
    Crafty.init(canvasWidth,canvasHeight,document.getElementById('game'));
    Crafty.background("black");

    //  The box entity
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
 
    // Create text that shows hit count
    var hitText = Crafty.e('2D, DOM, Text') 
        .textColor('white')
        .text('Hit:' + hitCounter)
        .attr({
            x: canvasWidth - 70,
            y: 10
        })
        .textFont({
          size: '30px',
          weight: 'bold'
        });

// Rain dropping function
function drop()
{   
    // Randomize the x-postition of the rain drop
    var randomx = Math.floor((Math.random() * canvasWidth));

    // Create rain drop entity
    Crafty.e('Drop, 2D, Canvas, Color, Solid, Gravity, Collision')
        .attr({x: randomx, y: 0, w: 2, h: 15})
        .color('#FFFFFF')
        .gravity()
        .gravityConst(.5)

        // When a rain drop hit the Player, increase the hit counter
        .checkHits('Player')
        .bind("HitOn", function(){
            this.destroy();
            hitCounter++;
            hitText.text("Hit: " + hitCounter);

            // if the hit counter becomes 5, reset it
            if (hitCounter == 5)
            {
              box.x = 500;
              hitCounter = 0;
              hitText.text("Hit: " + hitCounter);
            }
        })

        // For each frame, check if it hit the floor. If it does, destroy it
        .bind("EnterFrame", function() {
            if (this.y > canvasHeight-30)
              this.destroy();
        });
}

// For each frame, check if the frame number is the multiple of 4. If it is, then create call drop() funciton 
Crafty.bind("EnterFrame", function(){
   if (Crafty.frame() % 4 == 0) {
        drop();
   }
});


});

 
