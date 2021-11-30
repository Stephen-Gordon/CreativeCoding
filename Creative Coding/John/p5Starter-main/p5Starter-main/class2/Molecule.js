class Molecule{
    constructor(){
        
        this.pos = createVector(
            Math.round(Math.random() * 500),
            Math.round(Math.random() * 500)
            )
        this.speed = createVector(
            Math.random() * 5 - 2.5,
            Math.random() * 5 - 2.5
        )
        this.radius = Math.round(Math.random() * 10 + 5);
    }

    render(){
        let myAngle=this.speed.heading();
        push();
        translate(this.pos.x,this.pos.y);
        rotate(myAngle)
        rect(0, 0, this.radius,this.radius)
        pop()
    }

    move(){
        this.pos.x +=this.speed.x;
        this.pos.y +=this.speed.y;
        if(this.pos.x > 500){this.pos.x=0}
        if(this.pos.x < 0){this.pos.x=500}
        if(this.pos.y > 500){this.pos.y=0}
        if(this.pos.y < 0){this.pos.y=500}
    }

}