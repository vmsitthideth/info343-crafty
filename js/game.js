'use strict';

    var screenWidth = 1500;
    var screenHeight = 900;
    var hitCounter = 0;

// When the DOM has loaded
$(document).ready(function() {

    // Initialize Crafty
    Crafty.init(1500,900).canvas.init();
    Crafty.background("black");

    var player = Crafty.e("Player,2D, Canvas, Color,Gravity, Twoway, Collision")
        .color("yellow")
        .twoway(10)
        .gravity('Floor')
        .attr({w:50, h:50, x:10, y:820})


    var floor = Crafty.e("Floor,2D, Canvas, Color, Collision")
        .color("blue")
        .attr({h:30, w:1500, x:0, y:870 })



    var hitText = Crafty.e('2D, DOM, Text')
        .textColor('white')
        .attr({
            x: screenWidth - 100,
            y: 10
        });
        
        hitText.textFont({
          size: '30px',
          weight: 'bold'
        });

        hitText.text('Hit:' + hitCounter);

    var rightWall = Crafty.e("RightWall,2D, Canvas, Color, Collision")
        .color("blue")
        .attr({h:900,w:10,x:1500, y:0})

function drop()
{
  var randomx = Math.floor((Math.random() * screenWidth) + 50);
    Crafty.e('Drop, 2D, Canvas, Color, Solid, Gravity, Collision')
        .attr({x: randomx, y: 0, w: 2, h: 15})
        .color('#FFFFFF')
        .gravity()
        .gravityConst(.5)
        .checkHits('Player')
        .bind("HitOn", function(){
            this.destroy();
            hitCounter++;
            hitText.text("Hit: " + hitCounter);

            if (hitCounter == 5)
            {
              player.x = 20;
              hitCounter = 0;
              hitText.text("Hit: " + hitCounter);
            }
        })
        .bind("EnterFrame", function() {
            if (this.y > screenHeight-30)
              this.destroy();
        });
}

function pause()
{
  Crafty.pause();
}

Crafty.bind("EnterFrame", function(){
   if (Crafty.frame() % 2 == 0)
    drop();
});


});



