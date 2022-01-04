class Emitter {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.asteroids = [];
        
    }


    //Instantiates the asteroids
    createAsteroids() {
        for (let i = 0; i < 1; i++) {
            this.asteroids.push(new Asteroid(this.position.x, this.position.y))
        }



    }



    //Goes to asteroids class and calls the functions


    //Applies Force
    applyForce(force) {
        for (let asteroid of this.asteroids) {
            asteroid.applyForce(force);
        }
    }




    //Checks how long asteroid is drawn for. If its over the lifetime set, its then removed from the array using splice
    update() {
        for (let asteroid of this.asteroids) {
            asteroid.update();
        }

        for (let i = this.asteroids.length - 1; i >= 0; i--) {
            if (this.asteroids[i].isFinished()) {
                this.asteroids.splice(i, 1);
            }
        }
    }


    //renders the asteroids
    render() {
        this.asteroids.forEach(asteroid => {
            asteroid.render();
        })


    }

}