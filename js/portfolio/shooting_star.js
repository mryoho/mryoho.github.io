var ShootingStarProject = function( p ) {
    p.setup = function() {
        var myCanvas = p.createCanvas(350, 350);
        myCanvas.parent('shooting-star-container');
    }
    
    p.initializeShootingStar = function() {
        var xPosStar = 0;
        var yPosStar = 0;
        
        var x1PosBezier = 0;
        var y1PosBezier = 380;
        var x2PosBezier = 20;
        var y2PosBezier = 400;
        
        var x1PosQuad = 30;
        var y1PosQuad = 0;
        var x2PosQuad = 0;
        var y2PosQuad = 30;
        
        draw = function() {
            p.background(29, 40, 115);
            p.fill(255, 242, 0);
            
            
            p.ellipse(xPosStar, yPosStar, 10, 10);
            
            p.quad(x1PosQuad, y1PosQuad, x2PosQuad, y2PosQuad, x2PosQuad + 50, y2PosQuad + 40, x1PosQuad+ 50, y1PosQuad + 40);
            
            p.fill(255, 153, 0);
            p.bezier(x1PosBezier, y2PosBezier, x1PosBezier + 100, y1PosBezier + 50, x2PosBezier + 20, y2PosBezier - 50, x1PosBezier, y2PosBezier);
            
            xPosStar++;
            yPosStar++;
            
            x1PosBezier++;
            y1PosBezier -= 2;
            x2PosBezier++;
            y2PosBezier -= 3;
        };
    }
}

var shootingstarp5 = new p5(ShootingStarProject);

shootingstarp5.initializeShootingStar();

/*
// variables
var xPosStar = 0;
var yPosStar = 0;

var x1PosBezier = 0;
var y1PosBezier = 380;
var x2PosBezier = 20;
var y2PosBezier = 400;

var x1PosQuad = 30;
var y1PosQuad = 0;
var x2PosQuad = 0;
var y2PosQuad = 30;


// Variables for the animation
function resetShootingStar() {
    xPosStar = 0;
    yPosStar = 0;
    
    x1PosBezier = 0;
    y1PosBezier = 380;
    x2PosBezier = 20;
    y2PosBezier = 400;
    
    x1PosQuad = 30;
    y1PosQuad = 0;
    x2PosQuad = 0;
    y2PosQuad = 30;
}

resetShootingStar();

function draw() {
    
    background(29, 40, 115);
    fill(255, 242, 0);
    
    
    ellipse(xPosStar, yPosStar, 10, 10);
    
    quad(x1PosQuad, y1PosQuad, x2PosQuad, y2PosQuad, x2PosQuad + 50, y2PosQuad + 40, x1PosQuad+ 50, y1PosQuad + 40);
    
    fill(255, 153, 0);
    bezier(x1PosBezier, y2PosBezier, x1PosBezier + 100, y1PosBezier + 50, x2PosBezier + 20, y2PosBezier - 50, x1PosBezier, y2PosBezier);
    
    xPosStar++;
    yPosStar++;
    
    x1PosBezier++;
    y1PosBezier -= 2;
    x2PosBezier++;
    y2PosBezier -= 3;
    
}
*/