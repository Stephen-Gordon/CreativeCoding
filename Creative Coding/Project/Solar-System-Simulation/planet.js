class Planet {
  constructor(radius, distance, orbitSpeed, color) {
    this.radius = radius
    this.angle = random(TWO_PI)
    this.distance = distance
    this.orbitSpeed = orbitSpeed
    this.color = color
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
