

var FishTank = function( p ) {
    var canvasSizeX = 350;
    var canvasSizeY = 350;
    p.setup = function() {
        var fishTankCanvas = p.createCanvas(canvasSizeX, canvasSizeY);
        fishTankCanvas.parent('fish-tank-container');
        //p.noLoop();
        
        p.background(89, 216, 255);
    
        // draw some starter fish
        drawFish(100, 100, 100, 100, p.color(p.random(30, 140),p.random(20, canvasSizeX), p.random(20, canvasSizeX)),p.color(p.random(20, canvasSizeX), p.random(20, canvasSizeX),p.random(20, canvasSizeX)), p.random(1, 200),p.random(1, 100));
        
        drawFish(200, 271, 213, 100, p.color(p.random(30, 140), p.random(20, canvasSizeX), p.random(20, canvasSizeX)),p.color(p.random(20, 130), p.random(20, canvasSizeX), p.random(20, canvasSizeX)),p.random(1, 255),p.random(1, 255));
        
        drawFish(150, 165, 137, 22, p.color(p.random(191, 242), p.random(20, canvasSizeX), p.random(20, canvasSizeX)), p.color(p.random(100, 130), p.random(20, canvasSizeX), p.random(20, canvasSizeX)),p.random(1, 200),p.random(1, 100));
        
        // draw some starter pebbles
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
        drawPebbles(p.random(1, canvasSizeX), canvasSizeY);
    }
    
    var drawFish=function(centerX, centerY, bodyLength, bodyHeight, bodyColor, tailColor, tailWidth, eyeSize) {
           
            p.noStroke();
            p.fill(bodyColor);
            //body
            p.ellipse(centerX, centerY, bodyLength, bodyHeight);
            // tail
            var tailHeight = bodyHeight/2;
            p.fill(tailColor);
            p.triangle(centerX-bodyLength/2, centerY,
                 centerX-bodyLength/2-tailWidth, centerY-tailHeight,
                 centerX-bodyLength/2-tailWidth, centerY+tailHeight);
        
            // eye
            p.fill(0, 0, 0);
            p.ellipse(centerX+bodyLength/4, centerY, eyeSize/5, eyeSize/5);
        };
        
    p.mousePressed = function() { 
        console.log("Mouse Pressed!");
        drawFish(p.mouseX, p.mouseY, p.random(20, 100) , p.random (20,100), p.color(p.random(100, 250), p.random(1, 250),
        p.random(100, 250)), p.color(p.random(1, 255), 100, 255), p.random(2, 20), p.random(2, 100));
    };
    
    var drawPebbles = function(posX, posY){
        p.fill(p.random(1, 255), p.random(1, 255), 9);
        p.ellipse (posX,posY, p.random(1, 10), p.random(5,10));
    };
    

    
}

var fishtankp5 = new p5(FishTank);

function initializeFishTank() {
    //fishtankp5.redraw();
}

//initializeFishTank();

//fishtankp5.initializeFishTank();