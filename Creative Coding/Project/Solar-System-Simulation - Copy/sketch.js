let planets = []

let howManyold;
let numOfPlanet = 8;
let params = {


  howMany: 8,
  howManyMin: 2,
  howManyMax: 10,

  orbitSpeed: (Math.random()*1-0)+0,
  orbitSpeedMin: 0,
  orbitSpeedMax: 1,

  distance: Math.round(Math.random() * 400-30)+30,
  distanceMin: 30,
  distanceMax: 400,

  angle: Math.round(Math.random() * 20-3)+3,
  angleMin: 3,
  angleMax: 20


  



}
var bgColor = [180, 255, 255];
let visible = true;
var gui;


function populateArray(orSp, dist, ang) {
  for (i = 0; i < params.howMany; i++) {
    planets.push(new Planet(orSp, dist, ang));
  }
  return console.log("population complete", )
}



function setup() {
  createCanvas(800, 800)
  populateArray(params.orbitSpeed,params.distance, params.angle);
  gui = createGui('Change Planets');
  gui.addObject(params);
}

function draw() {
  clear();
  background(51)
  translate(width / 2, height / 2)
  fill(255, 204, 0)
  noStroke()
  ellipse(0, 0, 45, 45)
  if (howManyold != params.howMany) {
    planets = [];
    //populate the Array
    populateArray(params.orbitSpeed,params.distance, params.angle);
  }

  planets.forEach(planet => {
    //update Values from the GUI
/*     planet.updateVals(params.orbitSpeed,params.distance, params.angle);*/
    planet.orbit();
    planet.show();
  });
  //check if number of moeules has changed
  howManyold = params.howMany;

}

function keyPressed() {
  switch (key) {
    // type [F1] to hide / show the GUI
    case 'p':
      visible = !visible;
      if (visible) gui.show();
      else gui.hide();
      break;
  }
}