let screenWidth = 500;
let screenHeight = 500;
let aliens = [];
let alienWidth = 20;
let alienHeight = 20;
let alienVelocity = 1;
let numCols = 10;
let numRows = 5;
let hSpace = 15;
let vSpace = 15;
let xOffset = (screenWidth - (numCols-1) * hSpace) / 2;
let yOffset = 10;
let shiftDown = 50;
let alienImg;

let shooterWidth = 100;
let shooterHeight = 20;
let shooter;

let bullets = [];
let bulletWidth = 10;
let bulletHeight = 10
//bullet speed
let bulletVelocity = 5;


function preload(){
    alienImg = loadImage('assets/spaceInvaders.png');
}






function setup() {
    populateAliens();
    shooter = new Shooter(screenWidth/2, screenHeight - shooterHeight);
    createCanvas(screenWidth, screenHeight);
    background(255);
}

function draw() {
    background(0);
    shooter.render();
    shooter.move();
    let shift = false;
    aliens.forEach(alien => {
        alien.move();
        alien.render();
        alien.pos.x >=screenWidth ? shift = true : null;
        alien.pos.x <= 0 ? shift = true : null;
    });

    if(shift){
        aliens.forEach(alien => {
            alien.shift();
        });
    }


    for(let i = bullets.length - 1; i>=0; i--){
        bullets[i].move();
        bullets[i].render();
        for(let j = aliens.length-1; j>=0; j--){
            if(bullets[i].hits(aliens[j])){
                aliens.splice(j,1);
                bullets.splice(i,1);
                break;
            }
        }
 
    }

    /* bullets.forEach(bullet => {
        bullet.move();
        bullet.render();
    });
 */
}


function keyPressed(){
    //instanciates bullet
    if (keyCode === 32){
        bullets.push(new Bullet(shooter.pos.x,475))
    }

    if (keyCode === RIGHT_ARROW){
        shooter.setDirection(1);
    } else if (keyCode === LEFT_ARROW){
        shooter.setDirection(-1);
    }
}


function populateAliens(){
    for(let row = 0; row < numRows; row++){
        for(let col = 0; col <numCols; col++){
            aliens.push(new Alien(col * hSpace + xOffset, row * vSpace + yOffset));
        }
    }
}