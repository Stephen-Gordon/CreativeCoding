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
		//translate(this.x, this.y);
		//rotate by rotation value of object
		//rotate(this.rotation);
		line(mouseX-50, mouseY-25, mouseX, mouseY-25);
		line(mouseX, mouseY-25, mouseX, mouseY-50);
		line(mouseX, mouseY-50, mouseX+50, mouseY);
		line(mouseX+50, mouseY, mouseX, mouseY+50);
		line(mouseX, mouseY+50, mouseX, mouseY+25);
		line(mouseX, mouseY+25, mouseX-50, mouseY+25);
		line(mouseX-50, mouseY+25, mouseX-50, mouseY-25);
		
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

