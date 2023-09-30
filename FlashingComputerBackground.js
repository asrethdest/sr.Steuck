//This program creates a flashing rainbow background for your screen


function setup() {
  createCanvas(800, 450);
  noStroke();
  colorMode(HSB);
}

function draw() {
  background(0); // Set the background color to black

  // Define parameters for the grid
  let numCols = 20;
  let numRows = 10;
  let spacingX = width / numCols;
  let spacingY = height / numRows;

  // Loop through rows and columns to create shapes
  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      // Calculate the shape's position
      let x = i * spacingX + spacingX / 2;
      let y = j * spacingY + spacingY / 2;

      // Calculate a color based on time
      let hue = map(sin(frameCount * 0.02 + i * 0.1), -1, 1, 0, 360);
      let saturation = map(cos(frameCount * 0.03 + j * 0.1), -1, 1, 50, 100);
      let brightness = 100;

      // Set the fill color
      fill(hue, saturation, brightness);

      // Randomly choose which shape to draw
      let randomShape = floor(random(5)); // 0: Circle, 1: Square, 2: Triangle, 3: Pentagon, 4: Hexagon

      if (randomShape === 0) {
        // Draw a circle using a for loop
        let numVertices = 50; // Number of vertices for the circle
        beginShape();
        for (let k = 0; k < numVertices; k++) {
          let angle = map(k, 0, numVertices, 0, TWO_PI);
          let circleX = x + cos(angle) * (spacingX * 0.4);
          let circleY = y + sin(angle) * (spacingY * 0.4);
          vertex(circleX, circleY);
        }
        endShape(CLOSE);
      } else if (randomShape === 1) {
        // Draw a square using a for loop
        let halfSize = min(spacingX, spacingY) * 0.4;
        rectMode(CENTER);
        for (let k = 0; k < 4; k++) {
          let angle = HALF_PI * k;
          let squareX = x + cos(angle) * halfSize;
          let squareY = y + sin(angle) * halfSize;
          rect(squareX, squareY, halfSize * 2, halfSize * 2);
        }
      } else if (randomShape === 2) {
        // Draw a triangle using a for loop
        let u = 0
        let halfSize = min(spacingX, spacingY) * 0.4;
        for (let k = 0; k < 3; k++) {
          let angle = TWO_PI / 3 * k;
          let triangleX = x + cos(angle) * halfSize;
          let triangleY = y + sin(angle) * halfSize;
          triangle(triangleX, triangleY, x, y, u,u);
        }
      } else if (randomShape === 3) {
        // Draw a pentagon using a for loop
        let halfSize = min(spacingX, spacingY) * 0.4;
        beginShape();
        for (let k = 0; k < 5; k++) {
          let angle = TWO_PI / 5 * k;
          let pentagonX = x + cos(angle) * halfSize;
          let pentagonY = y + sin(angle) * halfSize;
          vertex(pentagonX, pentagonY);
        }
        endShape(CLOSE);
      } else {
        // Draw a hexagon using a for loop
        let halfSize = min(spacingX, spacingY) * 0.4;
        beginShape();
        for (let k = 0; k < 6; k++) {
          let angle = TWO_PI / 6 * k;
          let hexagonX = x + cos(angle) * halfSize;
          let hexagonY = y + sin(angle) * halfSize;
          vertex(hexagonX, hexagonY);
        }
        endShape(CLOSE);
      }
    }
  }
}
