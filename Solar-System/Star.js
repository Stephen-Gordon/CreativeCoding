class Star {
    constructor() {
        //chooses a random place to start the star inside the window
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
        this.pz = this.z;






    }


    update() {
        //set the speed of the stars
        this.z = this.z - speed;    
        //if star goes past the screen width / height, it gets redrawn
        if (this.z < 1) {
            this.z = width;
            //they then get a new x / y position
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;

            
        }
    }


    show() {
        fill(255);
        noStroke();

        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);

        // Makes the radius get larger as they get further away
        let r = map(this.z, 0, width, 16, 0);
        ellipse(sx, sy, r, r);

    }


}