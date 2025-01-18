const w = 400;
const h = 300;

class DwarfPlanet {
    constructor(){
        this.deg = 190;
        let theta = Math.PI * this.deg / 180.0;
        this.x = w/2 + 950.0 + 1000.0 * Math.cos(theta);
        this.y = h/2 + 100.0 * Math.sin(theta);
        this.r_x = 5;
        this.r_y = 3;
    }


    draw() {
        noStroke();
        fill('rgba(255,255,255,1)');
        ellipse(this.x, this.y, this.r_x, this.r_y);
    }
    
    move() {
        if (this.deg > 0) {
            this.deg--;
        }
        else {
            this.deg = 360;
        }
        
        let theta = Math.PI * this.deg / 180.0;
        this.x = w/2 + 950.0 + 1000.0 * Math.cos(theta);
        this.y = h/2 + 100.0 * Math.sin(theta);
    }
}

// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor(){
        let deg = random(205,215);
        let theta = Math.PI * deg / 180.0;
        this.x = w/2 + 950.0 + 1000.0 * Math.cos(theta) + random(-2,2);
        this.y = h/2 + 100.0 * Math.sin(theta) + random(-2,2);
        this.r = 1;
    }
    
    // creation of a particle.
    createParticle() {
        if ((0 <= this.x && this.x < w) && (0 <= this.y && this.y < h)) {
            noStroke();
            fill('rgba(255,255,255,1)');
            circle(this.x,this.y,this.r);
        }
    }
    
}
    
// an array to add multiple particles
let particles = [];

class Planet {
    constructor(r){
        this.deg = 180;
        let theta = Math.PI * this.deg / 180.0;
        this.x = w/2 + 100.0 *Math.cos(theta);
        this.y = h/2 + 100.0 * Math.sin(theta);
        this.r = r;
    }

    draw() {
        noStroke();
        fill('rgba(128,128,255,1)');
        circle(this.x,this.y,this.r);
    }
    
    move() {
        if (this.deg > 0) {
            this.deg--;
        }
        else {
            this.deg = 360;
        }
        
        let theta = Math.PI * this.deg / 180.0;
        this.x = w/2 + 100.0 *Math.cos(theta);
        this.y = h/2 + 100.0 * Math.sin(theta);
    }

}

let dplanet;
let planet;


function setup() {
    const canvas = createCanvas(w, h);
    canvas.parent('canvasForHTML');

    particles.push(new Particle(2));
    for(let i = 0;i<30;i++){
        particles.push(new Particle(1));
    }

    dplanet = new DwarfPlanet();
    planet = new Planet(10);
}
    
function draw() {
    background('#0f0f0f');

    noStroke();
    fill('rgba(255,0,0,1)');
    circle(w/2,h/2,20)
    for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
    }

    dplanet.draw();
    planet.draw();

    dplanet.move();
    planet.move();
}

