class Planet {
  constructor(radius,angle, distance, orbitSpeed, color) {
   /*  this.radius = radius
    this.angle = random(TWO_PI)
    this.distance = distance
    this.orbitSpeed = orbitSpeed
    this.color = 255 */
  
    this.radius = Math.round(Math.random() * 10);
    this.angle = Math.round(Math.random() * 20-3)+3
    this.distance = Math.round(Math.random() * 400-30)+30
    this.orbitSpeed = (Math.random()*1-0)+0
    this.color = 255
  
  
  
  }

  updateVals(orSp, dist,ang) {
    this.orbitSpeed = orSp;
    this.distance = dist;
     this.angle = ang; 
  }


  show() {
    push()
    fill(this.color)
    rotate(this.angle)
    translate(this.distance, 0)
    ellipse(0,0, this.radius)
    pop()
  }

  orbit() {
    this.angle += this.orbitSpeed
  }
}
