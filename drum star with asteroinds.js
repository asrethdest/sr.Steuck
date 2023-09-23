let centralDrumAngleX = 300;
let centralDrumAngleY = 0;
let orbitingDrums = [];
let waves = [];

function setup() {
  createCanvas(700, 700, WEBGL);

  // Create orbiting spheres with chaotic orbits and smaller radii
  for (let i = 0; i < 8; i++) {
    translate()
    orbitingDrums.push({
      angleX: random(TWO_PI),
      angleY: random(TWO_PI),
      radius: random(50, 100), // Adjusted the radius range to make them smaller
      radiusChange: random(0.01, 0.03),
      speed: random(0.01, 0.03),
    });
  }
}

function draw() {
  background(0); // Black background
  rotateX(centralDrumAngleX); // Rotate the central drum around X-axis
  rotateY(centralDrumAngleY); // Rotate the central drum like a top

  // Central blue drum body (bottom cylinder)
  fill(0, 0, 225);
  cylinder(100, 80);
  strokeWeight(1);

  // Central green drum connector (middle cylinder)
  fill(0, 225, 0);
  translate(0, -40, 0); // Translate to the middle of the bottom cylinder
  cylinder(105, 15);

  // Central Red drum top (top cylinder)
  fill(225, 0, 0);
  translate(0, -10, 0); // Translate to the top of the center cylinder
  cylinder(100, 10);

  centralDrumAngleX += 0.01; // Rotate the central drum like a coin flip
  centralDrumAngleY += 0.03; // Rotate the central drum

  // Orbiting spheres (drums)
  for (let i = 0; i < orbitingDrums.length; i++) {
    let drum = orbitingDrums[i];

    push();
    translate(
      cos(drum.angleX) * drum.radius,
      0,
      sin(drum.angleY) * drum.radius
    );
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.02);
    fill(225, random(100, 255), 0); // Vary the color for each orbiting drum
    noStroke();
    sphere(10); // Adjusted the sphere size to make them smaller
    pop();
    drum.angleX += drum.speed; // Update the orbiting drums' angles
    drum.angleY += drum.speed * 1.5; // Vary the speed for more chaos
    drum.radius += cos(drum.radiusChange); // Add randomness to radius
  }

  // Handle wave animation
  for (let i = waves.length - 1; i >= 0; i--) {
    let wave = waves[i];
    wave.display();
    wave.update();
    if (wave.isFinished()) {
      waves.splice(i, 1);
    }
  }
}

function mousePressed() {
  // Create a new wave at the location of the central drum
  let wave = new Wave(0, 0);
  waves.push(wave);
}

class Wave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.maxRadius = 200;
    this.alpha = 255;
  }

  update() {
    this.radius += 5;
    this.alpha -= 10;
  }

  display() {
    noFill();
    stroke(0, 225, 225, this.alpha);
    strokeWeight(3);
    ellipse(this.x, this.y, this.radius * 2);
  }

  isFinished() {
    return this.alpha <= 0;
  }
}
