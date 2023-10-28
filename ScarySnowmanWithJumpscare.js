 let carrot;
let carrotBumps = [];

let jumpscareTime = 10000; // 15 seconds in milliseconds
let lastJumpscareTime = 0;
let jumpscareTriggered = false;

function setup() {
  createCanvas(600, 600, WEBGL);
  carrot = createVector(0, 0, 0);
  for (let i = 0; i < 100; i++) {
    let x = random(-50, 50);
    let y = random(-50, 50);
    let z = random(-50, 50);
    carrotBumps.push(createVector(x, y, z));
  }
}

function draw() {
  background(0);
  pointLight(200, 0, 0, 600, 600, 600);
  pointLight(255, 255, 255, 0, 300, 100);

  // Snowman
  if (!jumpscareTriggered) {
    // Bottom sphere (snowman base)
    push();
    translate(0, 50);
    sphere(100);
    pop();

    // Middle sphere
    push();
    translate(0, -50);
    sphere(70);
    pop();

    // Head sphere
    push();
    translate(0, -130, 0);
    sphere(50);
    pop();

    // Hat cylinder
    push();
    fill(100, 0, 0);
    translate(0, -180, 0);
    cylinder(60, 10);
    pop();

    // Top part of hat
    push();
    fill(100, 0, 0);
    translate(0, -190, 0);
    cylinder(40, 20);
    pop();

    // Eyes spheres   
    push();
    translate(-15, -130, 100);
    fill(0);
    sphere(10, 10);
    pop();
  
    push();
    translate(15, -130, 100);
    fill(0);
    sphere(10, 10);
    pop();
  }

  // Check if it's time for jumpscare
  if (millis() - lastJumpscareTime > jumpscareTime) {
    jumpscare();
    lastJumpscareTime = millis();
  }
}

function jumpscare() {
  jumpscareTriggered = true;
  background(255);

  // Carrot
  push();
  translate(0, 120);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  // Carrot body
  fill(255, 165, 79); // Orange color
  cone(50, 200, 40, 10);

  // Carrot bumps
  for (let i = 0; i < carrotBumps.length; i++) {
    let b = carrotBumps[i];
    push();
    translate(b.x, b.y - 100, b.z);
    sphere(5);
    pop();
  }
  pop();

}
