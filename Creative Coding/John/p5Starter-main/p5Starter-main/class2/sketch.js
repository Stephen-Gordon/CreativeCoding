let molecules = [];
let numOfMolecules = 100;




function setup() {
    for (let counter = 0; counter < 10; counter++) {
        molecules.push(new Molecule())
    }
    createCanvas(500, 500);
    background(255, 0, 0);
    rectMode(CENTER);
}

function draw() {
    background(255, 0, 0)
    for (let counter = 0; counter < 10; counter++) {
        molecules[counter].move();        
        molecules[counter].render();
                

    }
}
function distance (x,y){
    let distance = Math.sqrt(x*x + y*y);
    return distance;
}