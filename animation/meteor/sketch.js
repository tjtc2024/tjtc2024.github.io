const w = 400;
const h = 300;

// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor(){
        let deg = random(0,360);
        let theta = Math.PI * deg / 180.0;
        this.x = w/2 + 950.0 + 1000.0 * Math.cos(theta) + random(-2,2);
        this.y = h/2 + 100.0 * Math.sin(theta) + random(-2,2);
        this.r = 1;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
    
    // creation of a particle.
    createParticle() {
        if ((0 <= this.x && this.x < w) && (0 <= this.y && this.y < h)) {
            noStroke();
            fill('rgba(255,255,255,1)');
            circle(this.x,this.y,this.r);
        }
    }
    
    // setting the particle in motion.
    moveParticle() {
        if(this.x < 0 || this.x > width)
          this.xSpeed*=-1;
        if(this.y < 0 || this.y > height)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
    }
    
    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
    joinParticles(particles) {
        particles.forEach(element =>{
            let dis = dist(this.x,this.y,element.x,element.y);
            if(dis<85) {
                stroke('rgba(255,255,255,0.04)');
                line(this.x,this.y,element.x,element.y);
            }
        });
    }
}
    
// an array to add multiple particles
let particles = [];

class Planet {
    constructor(r){
        this.deg = 0;
        let theta = Math.PI * this.deg / 180.0;
        this.x = w/2 + 100.0 *Math.cos(theta);
        this.y = h/2 + 100.0 * Math.sin(theta);
        this.r = r;
    }

    drawPlanet() {
        noStroke();
        fill('rgba(128,128,255,1)');
        circle(this.x,this.y,this.r);
    }
    
    // setting the particle in motion.
    movePlanet() {
        if (this.deg < 359) {
            this.deg++;
        }
        else {
            this.deg = 0;
        }
        
        let theta = Math.PI * this.deg / 180.0;
        this.x = w/2 + 100.0 *Math.cos(theta);
        this.y = h/2 + 100.0 * Math.sin(theta);
    }

}

let planets = [];


function setup() {
    const canvas = createCanvas(w, h);
    canvas.parent('canvasForHTML');
    for(let i = 0;i<500;i++){
        particles.push(new Particle());
    }

    planets.push(new Planet(5));
}
    
function draw() {
    background('#0f0f0f');
    for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
    }

    for (let j=0;j<planets.length;j++) {
        planets[j].drawPlanet();
        planets[j].movePlanet();
    }
}

