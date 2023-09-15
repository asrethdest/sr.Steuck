let x1, y1, x2, y2, x3, y3, x4, y4;
let stationaryTime = 0; // Track how long the mouse is stationary
let fireEffect = false; // Flag for triggering the fire effect
let fireX, fireY; // Coordinates for the fire

function setup() {
  createCanvas(400, 400);
  background(220);
  
  // Initialize control points
  x1 = x2 = x3 = x4 = mouseX;
  y1 = y2 = y3 = y4 = mouseY;
}

function draw() {
  stroke(0, 0, 255); // Blue color
  strokeWeight(2);

  // Update control points
  x1 = x2;
  y1 = y2;
  x2 = x3;
  y2 = y3;
  x3 = x4;
  y3 = y4;
  x4 = mouseX;
  y4 = mouseY;

  // Draw a curved line using the control points
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // Check if the mouse is stationary
  if (dist(mouseX, mouseY, pmouseX, pmouseY) < 1) {
    stationaryTime++;
  } else {
    stationaryTime = 0; // Reset the stationary time if the mouse moves
  }

  // If the mouse is stationary for 60 frames (1 second at 60fps), trigger the fire effect
  if (stationaryTime > 60) {
    fireEffect = true;
    fireX = mouseX;
    fireY = mouseY;
  }

  // Draw the fire effect
  if (fireEffect) {
    drawFire();
  }

  // Add a fading effect by drawing a semi-transparent background
  fill(220, 10); // Light gray with low opacity
  noStroke();
  rect(0, 0, width, height);
}

function drawFire() {
  // Create a small fire effect at the mouse's stationary position
  for (let i = 0; i < 10; i++) {
    let xPos = random(fireX - 10, fireX + 10);
    let yPos = random(fireY - 10, fireY + 10);
    let radius = random(5, 15);
    fill(255, 0, 0); // Red color
    ellipse(xPos, yPos, radius, radius);
    fill(255, 255, 0); // Yellow color
    ellipse(xPos, yPos - radius / 2, radius / 2, radius / 2);
  }
}
