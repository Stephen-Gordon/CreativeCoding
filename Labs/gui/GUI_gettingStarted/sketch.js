

let params = {

	xPos: 250,
	xPosMin: 0,
    xPosMax: 500,

    yPos: 250,
	yPosMin: 0,
    yPosMax: 500,
    
    width: 50,
	widthMin: 10,
    widthMax: 150,
    
    height: 50,
	heightMin: 10,
    heightMax: 150,

    angle: 100,
	angleMin: 0,
    angleMax: 360
   
}

var bgColor = [180, 255, 255];

let visible = true;
let gui;




// So now after all of our data has been created we will use p5.js
// to draw circles. We iterate through the array and draw a circle with
// the data in each object

function setup() {
    angleMode(DEGREES);
    createCanvas(500, 500);
    background(bgColor);

    // create the GUI
	gui = createGui('Change Values');
	gui.addObject(params);
    
    //noLoop();
}

function draw() {
    clear();
    background(bgColor);
    rectMode(CENTER);
    push();
    translate(params.xPos,params.yPos);
    rotate(params.angle)
    rect(0, 0, params.width, params.height);
    pop();
    
}

// check for keyboard events
function keyPressed() {
    switch(key) {
      // type [F1] to hide / show the GUI
      case 'p':
        visible = !visible;
        if(visible) gui.show(); else gui.hide();
        break;
    }
  }