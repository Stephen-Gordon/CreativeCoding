let myBall;
let myBall2;

function setup(){
	createCanvas(500,500)
	myBall = new Ball(200, 240 ,15 * cos(25), 15 * sin(25),20,(255,150,100))
	myBall2 = new Ball(100, 240,15 * cos(47), 15 * sin(47), 20,(255,40,10))
    

}

function draw(){
	background(255);

	/* if(myBall.x > width - myBall.radius ||  myBall.x < myBall.radius){
		myBall.vx = -myBall.vx;
	}

	if(myBall.y > height - myBall.x ||   myBall.radius < myBall.x){
		myBall.vy = -myBall.vy;
	}

		//ball2

	if(myBall2.x > width - myBall2.radius ||  myBall2.x < myBall2.radius){
		myBall2.vx = -myBall2.vx;
	}

	if(myBall2.y > height - myBall2.x ||   myBall2.radius < myBall2.x){
		myBall2.vy = -myBall2.vy;
	} */

	myBall.drawBall();
	myBall.moveBall();
	myBall2.drawBall();
	myBall2.moveBall();

	
	let result = distance(myBall.x, myBall.y,myBall2.x, myBall2.y)

	if(result < myBall.radius + myBall2.radius){
		text("collide", 50, 50)
	}

	function distance (x1,y1,x2,y2){
		dx = x1-x2;
		dy = y1-y2;

		let distance = Math.sqrt(dx*dx + dy*dy);
		return distance;
	}



	
    
}