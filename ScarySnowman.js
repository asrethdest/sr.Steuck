
let jumpscareTime = 15000; // 15 seconds in milliseconds
let lastJumpscareTime = 2000;
let jumpscareTriggered = false;
let mouthArc; 

function setup() {
  createCanvas(600, 600, WEBGL);
  
    let x = random(-50, 50);
    let y = random(-50, 50);
    let z = random(-50, 50);
  
  mouthArc = PI; 
}

function draw() {
  if (!jumpscareTriggered) {
    background(0);
    pointLight(200, 0, 0, 600, 600, 600);
    pointLight(255, 255, 255, 0, 300, 100);

    // Snowman
    push();
    translate(0, 50);
    sphere(100);
    pop();

    push();
    translate(0, -50);
    sphere(70);
    pop();

    push();
    translate(0, -130, 0);
    sphere(50);
    pop();

    push();
    fill(100, 0, 0);
    translate(0, -180, 0);
    cylinder(60, 10);
    pop();

    push();
    fill(100, 0, 0);
    translate(0, -190, 0);
    cylinder(40, 20);
    pop();

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
  background(225, 0, 0);

  // Creepy smiley face
  fill(255);
  ellipse(0, 0, 200, 200); // face

  // Eyes
  fill(0);
  ellipse(40, 0, 20, 20); // left eye
  ellipse(-40, 0, 20, 20); // right eye

  // Mouth
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(0, 40, 100, 60, 0, mouthArc); // mouth
}

function mouseClicked() {
  if (jumpscareTriggered) {
    // Check if the mouse is clicked within the smiley face's area
    let d = dist(mouseX, mouseY, width / 2, height / 2);
    if (d < 100) {
      // Decrease the arc value
      if (mouthArc > 0) {
        mouthArc -= 0.1;
      }
    }
  }
}
