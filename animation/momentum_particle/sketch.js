// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor(){
        this.start = true;
        this.x = random(50,width-50);
        this.y = height-50;
        this.r = 5;
        this.xSpeed = random(-5,5);
        this.ySpeed = random(5,10);
    }
    
    // creation of a particle.
    createParticle() {
        noStroke();
        fill('rgba(200,169,169,0.5)');
        circle(this.x,this.y,this.r);
    }

    // start Particle
    startParticle() {
        this.start = true;
    }

    // setting the particle in motion.
    moveParticle() {
        if (this.start) {
            if(this.x < 50 || this.x > width-50) this.xSpeed*=-1;
            if(this.y < 50 || this.y > height-50) this.ySpeed*=-1;
            
            this.x+=this.xSpeed;
            this.y+=this.ySpeed;
        }
    }
    
    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
    joinParticles(particles) {
        particles.forEach(element =>{
            let dis = dist(this.x,this.y,element.x,element.y);
            if(dis<85) {
                stroke('rgba(255,255,255,0.5)');
                //line(this.x,this.y,element.x,element.y);
            }
        });
    }
}
    
// an array to add multiple particles
let particles = [];
let cnt = 0;
let start = false;

function initParam() {
    start = true;
}
  
function clearParam() {
    start = false;
    cnt = 0;
    particles.splice(0);
}

function setup() {
    const canvas = createCanvas(400, 500);
    canvas.parent('canvasForHTML');

    const buttonStart = createButton('Start');
    buttonStart.position(10,70);
    buttonStart.mousePressed(initParam);
  
    const buttonReset = createButton('Reset');
    buttonReset.position(160,70);
    buttonReset.mousePressed(clearParam);
}



function draw() {
    background('#0f0f0f');
    fill(64,64,64);
    rect(40,40,320,420);

    if (start) {
        if (cnt%20 == 0 && cnt < 4000) {
            for(let i = 0;i<5;i++){
                particles.push(new Particle());
            }
        }

        for(let i = 0;i<particles.length;i++) {
            particles[i].createParticle();
            particles[i].moveParticle();
        }

        if (cnt < 4001) {
            cnt++;
        }
    }
}

