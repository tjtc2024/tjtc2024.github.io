// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
    constructor(pid) {
 
        this.r = 5;
        this.x = random(50,width-50);
        if (pid > 50) {
            this.y = height-200;
            this.xSpeed = random(-5,5);
            this.ySpeed = random(5,10);
        }
        else if (25 < pid) {
            this.y = random(height-75, height-125);
            this.xSpeed = random(-5,5);
            this.ySpeed = random(0,3);
        } else {
            this.x = 70+ pid * 10;
            this.y = height-50;
            this.xSpeed = 0;
            this.ySpeed = 2;
        }

    }
    
    // creation of a particle.
    createParticle() {
        noStroke();
        fill('rgba(200,169,169,0.5)');
        circle(this.x,this.y,this.r);
    }

    // setting the particle in motion.
    moveParticle() {
        if(this.x < 50 || this.x > width-50) this.xSpeed*=-1;
        if(this.y < 50 || this.y > height-200) this.ySpeed*=-1;
        
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
    }
}
    
// an array to add multiple particles
let particles = [];
    
function setup() {
    const canvas = createCanvas(400, 500);
    canvas.parent('canvasForHTML');
    
    for(let i = 0;i<120;i++){
        particles.push(new Particle(i));
    }
}

function draw() {
    background('#0f0f0f');
    fill(64,64,64);
    rect(40,40,320,420);
    

    for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
    }

}

