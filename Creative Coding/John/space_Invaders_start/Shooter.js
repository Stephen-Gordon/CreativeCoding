class Shooter {
    constructor(x,y){
        this.pos = createVector(x,y);
        this.direction = 0
    }

    render(){
        push()
        translate(this.pos.x, this.pos.y);
        fill(255,0,0);
        rectMode(CENTER);
        rect(0,0,shooterWidth,shooterHeight) 
        pop()
    }

    move(){
        this.pos.x += this.direction;
    }

    setDirection(direction){
        this.direction = direction
    }
} 