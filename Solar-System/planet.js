class Planet {
  constructor(x,y) {
    
    this.pos = createVector(x, y);
    this.radius = Math.round(Math.random() * 100 - 20) + 20
    this.angle = Math.round(Math.random() * 20 - 3) + 3
    this.distance = Math.round(Math.random() * 200 - 80) + 80;
    this.orbitSpeed = (Math.random() * 0.08 - 0.01) + 0.01
    
    this.index = random(textures)
  }



  show() {
    push()
    rotate(this.angle)
    translate(this.distance,0)
    image(this.index, this.pos.x, this.pos.y, this.radius, this.radius)
    pop()
  }

  orbit() {
    this.angle += this.orbitSpeed
  }

}