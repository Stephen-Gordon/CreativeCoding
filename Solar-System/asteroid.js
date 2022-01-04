class Asteroid {
  constructor(angle, distance, orbitSpeed, x, y) {

    this.radius = 64
    this.angle = angle
    this.distance = distance
    this.orbitSpeed = orbitSpeed
    this.x = x
    this.y = y

    this.pos =  p5.Vector.random2D();

    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(0.5, 2));

    this.acc = createVector(0, 0);

    this.lifetime = 180;

    

  }

  isFinished() {
    return (this.lifetime < 0);
  }


  //recieves a force from sketch file
  //adds the acceleration 
  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.velocity.add(this.acc);
    this.pos.add(this.velocity);
    //sets acceleration back to 0 so it doesnt keep adding it each frame
    this.acc.set(0, 0);
    this.lifetime -= 5;
  }

  


  

  render() {
    push()

    rotate(this.angle)
    translate(this.distance, 0)
    tint(255, 100, 100, this.lifetime);
    imageMode(CENTER)
    image(img, this.pos.x, this.pos.y, this.radius, this.radius)
    pop()
  }

  orbit() {
    this.angle += this.orbitSpeed
  }


   


}