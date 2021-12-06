let planets = []


let params = {


  howMany: 15,
  howManyMin: 2,
  howManyMax: 100,

  distance: 10,
  distanceMin: 5,
  distanceMax: 50,

  orbitSpeed: 0.1,
  orbitSpeedMin: 0,
  orbitSpeedMax: 1,

  angleSpeed: 10,
  angleSpeedMin: -25,
  angleSpeedMax: 50



}
var bgColor = [180, 255, 255];
let visible = true;
var gui;


function populateArray(orSp, dist) {
  for (i = 0; i < params.howMany; i++) {
    planets.push(new Planet(orSp, dist));
  }
  return console.log("population complete", )
}



function setup() {
  createCanvas(800, 800)
  populateArray(params.distance, params.orbitSpeed, params.angleSpeed);
  gui = createGui('Change Planets');
  gui.addObject(params);
  gui.addGlobals('bgColor');

  let mercury_color = color(255, 237, 201)
  let venus_color = color(217, 107, 42)
  let earth_color = color(47, 82, 229)
  let mars_color = color(229, 53, 32)
  let jupiter_color = color(229, 115, 33)
  let saturn_color = color(38, 194, 25)
  let uranus_color = color(136, 218, 229)
  let neptune_color = color(47, 204, 229)
  let pluto_color = color(217, 122, 116)
  mercury = new Planet(12, 34, 0.08, mercury_color)
  venus = new Planet(17, 45, 0.07, venus_color)
  earth = new Planet(18, 60, 0.07, earth_color)
  mars = new Planet(9, 76, 0.068, mars_color)
  jupiter = new Planet(39, 95, 0.06, jupiter_color)
  saturn = new Planet(34, 115, 0.056, saturn_color)
  uranus = new Planet(22, 135, 0.052, uranus_color)
  neptune = new Planet(27, 300, 0.04, neptune_color)
  pluto = new Planet(3, 395, 0.034, pluto_color)

  planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto]
}

function draw() {
  background(51)
  translate(width / 2, height / 2)
  fill(255, 204, 0)
  noStroke()
  ellipse(0, 0, 45, 45)
  for (i in planets) {
    planets[i].show()
    planets[i].orbit()
    planets[i].updateVals(params.distance, params.orbitSpeed, params.angleSpeed)
  }
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