/* Arrays */
let emitters = [];

let planets = [];

let stars = [];


let radius = Math.round(Math.random() * 20 - 5) + 5;

let orbitSpeed = (Math.random() * 0.08 - 0.01) + 0.01;

let distance = Math.round(Math.random() * 400 - 200) + 200;

let angle = Math.round(Math.random() * 20 - 3) + 3;


//texture for the asteroid
let img;



let textures = [];

let speed;


//preloads all the necessary images from my Data file. Then puts the planet images into an array 

function preload() {
  img = loadImage('texture32.png');
  
  textures[0] = loadImage('data/planet0.jpg');
  textures[1] = loadImage('data/planet1.jpg');
  textures[2] = loadImage('data/planet2.jpg');
  textures[3] = loadImage('data/planet3.jpg');
  textures[4] = loadImage('data/planet4.jpg');
  textures[5] = loadImage('data/planet5.jpg');
  textures[6] = loadImage('data/planet6.jpg');
  textures[7] = loadImage('data/planet7.jpg');
  textures[8] = loadImage('data/planet8.jpg');
  textures[8] = loadImage('data/planet9.jpg');
}




//GUI
let params = {

  howMany: 100,
  howManyMin: 0,
  howManyMax: 200
}


let visible = true;
var gui;
let howManyold;



function populatePlanets() {
  
  for (let i = 0; i < howManyold; i++) {
    stars[i] = new Star();
  }
  //console.log(stars.length)
  
}







function setup() {


  for (i = 0; i < 8; i++) {
    planets.push(new Planet());
  }
  //pushes stars to the star array if theres less than i of them
  

  //Pushes a new emitter object into the emitters array
  emitters.push(new Emitter(300, 300));

  createCanvas(800, 800);

}

function draw() {

  //control speed of stars
  speed = map(height, 0, width, 0, 25);

  clear();
  background(0)
  translate(width / 2, height / 2)
  fill(255, 204, 0)
  noStroke()
  ellipse(0, 0, 45, 45)



  /*  Calling the render / show function for each object in the arrays */


  //Stars
  stars.forEach(star => {
    star.update();
    star.show();
  });

  if (howManyold != params.howMany) {
    stars = [];
    //populate the Array
    populatePlanets();
    gui = createGui('Change Solar System');
    gui.addObject(params);
  }


  //Planets
  planets.forEach(planet => {
    planet.orbit();
    planet.show();
  });


  howManyold = params.howMany;

  //Creates the gravity force which makes it point upwards 
  let force = createVector(0, -0.1);

  //Creates the direction for the wind
  let dir = map(angle += orbitSpeed, 0, width, -0.1, 0.1);

  //Creates the wind for the emitter
  let wind = createVector(dir, 0);


  //Emitters
  emitters.forEach(emitter => {
    emitter.createAsteroids(rotate(angle));
    emitter.update();
    emitter.render();
    emitter.applyForce(force);
    emitter.applyForce(wind);
  });
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