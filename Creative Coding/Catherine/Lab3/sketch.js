let myArrow;




function setup(){
	createCanvas(500,500)
/* 	myArrow = new ArrowUpdated(width/2, height/2,0)
 */	myArrow = new ArrowUpdated(200, 240 ,15 * cos(25), 15 * sin(25),20,(255,150,100))

}


function draw(){
	background(200);
    myArrow.drawArrow();
}