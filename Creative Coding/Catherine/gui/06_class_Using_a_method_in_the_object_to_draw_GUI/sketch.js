let molecules = [];
let howManyold
let numOfMolecules = 50;

let params = {
	howMany: 15,
	howManyMin: 2,
    howManyMax: 100,

	speedX: 5,
	speedXMin: -25,
    speedXMax: 25,
    
    speedY: 5,
	speedYMin: -25,
    speedYMax: 25,
    
    radius: 10,
	radiusMin: 5,
    radiusMax: 50

   
}

var bgColor = [180, 255, 255];

let visible = true;
var gui;



function populateArray(r,xSp, ySp) {
    for (i = 0; i < params.howMany; i++) {
        molecules.push(new molecule(r,xSp,ySp));
    }
    return console.log("population complete", )
}

// So now after all of our data has been created we will use p5.js
// to draw circles. We iterate through the array and draw a circle with
// the data in each object

function setup() {
    createCanvas(500, 500);
    background(bgColor);
    //populate the Array
    populateArray(params.radius, params.speedX, params.speedY);
    // create the GUI
	gui = createGui('Change Molecules');
	gui.addObject(params);
    gui.addGlobals('bgColor');
    //noLoop();
}

function draw() {
    clear();
    background(bgColor);

    if (howManyold != params.howMany) {
        molecules = [];
        //populate the Array
        populateArray(params.radius, params.speedX, params.speedY);
    }
    // Using an Array For Each method with an arrow function but
    // this time we are call the function on the object
    molecules.forEach(molecule => {
        //update Values from the GUI
        molecule.updateVals(params.speedX, params.speedY, params.radius, params.speedX, params.speedY)
        molecule.move();
        molecule.render();
    });
    //check if number of moeules has changed
    howManyold = params.howMany;
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