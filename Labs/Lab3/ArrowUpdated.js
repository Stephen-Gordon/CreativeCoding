//Arrow class
class ArrowUpdated {
	constructor(x, y, vx, vy, rotation, c) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.rotation = rotation;
		this.c = c;
	}
	
	//function to draw the arrow
	drawArrow() {
		let angle = atan2(this.vy, this.vx);

		push();
		//translate from the top left corner to x and y of object
		translate(this.x, this.y);
		//rotate by rotation value of object
		rotate(angle);
		fill(this.c);
		//Draws Arrow
		beginShape();
		vertex(-50, -25);
		vertex(0, -25);
		vertex(0, -50);
		vertex(50, 0);
		vertex(0, 50);
		vertex(0, 25);
		vertex(-50, 25);
		vertex(-50, -25);
		endShape();
		pop();
		
	}
	moveArrow()
	{
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}