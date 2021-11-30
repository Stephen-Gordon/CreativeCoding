//Arrow class
class Arrow {
	constructor(x, y, rotation) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		//rotation of arrow
		this.rotation = rotation;
		
		
	}

	

	drawArrow() {
		//translate from the top left corner to x and y of object
		translate(this.x, this.y);
		//rotate by rotation value of object
		rotate(this.rotation);
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);
		
	}
} 

let myArrow;



function setup() {
	createCanvas(720, 400);
	myArrow = new Arrow(width/2, height/2,0)
	
  }

function draw(){
	myArrow.drawArrow();

}

function mouseMoved(){
	let dx = mouseX - myArrow.x;
	let dy = mouseY - myArrow.y;
	let angle = atan2(dy, dx);
	//angle = dx-dy;
	myArrow.rotation = angle;
	myArrow.drawArrow();
	background(150);
	
}

