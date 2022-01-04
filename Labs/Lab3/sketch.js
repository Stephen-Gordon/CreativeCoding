let myArrow;



function setup() {
	createCanvas(500, 500)
	
	myArrow = new ArrowUpdated(200, 240, 4 * cos(60), 4 * sin(60), 0, (255, 150, 100))

}


function draw() {
	background(200);
	
	myArrow.drawArrow();
	myArrow.moveArrow();
}