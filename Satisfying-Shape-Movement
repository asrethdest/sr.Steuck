

let numShapes = 100;
let angle = 0;

function setup() {
  createCanvas(800, 800);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  for (let i = 0; i < numShapes; i++) {
    let x = map(sin(angle + i * TWO_PI / numShapes), -1, 1, 50, 300);
    let y = map(cos(angle + i * TWO_PI / numShapes), -1, 1, 50, 300);
    let sizee = map(mouseX, 0, width, 20, 100);
    let r = map(sin(angle + i * TWO_PI / numShapes), -1, 1, 0, 255);
    let g = map(cos(angle + i * TWO_PI / numShapes), -1, 1, 0, 255);
    let b = map(sin(angle + i * TWO_PI / numShapes), -1, 1, 0, 255);

    stroke(r, g, b);
    push();
    translate(x, y);
    rotate(angle + i * TWO_PI / numShapes);
    let shapeType = int(map(mouseY, 0, height, 0, 4));
    if (shapeType === 0) {
      rect(0, 0, sizee, sizee);
    } else if (shapeType === 1) {
      ellipse(0, 0, sizee, sizee);
    } else if (shapeType === 2) {
      triangle(0, 0, sizee, 0, sizee / 2, sizee * 0.866);
    } else if (shapeType === 3) {
      line(0, 0, sizee, sizee);
    } else {
      arc(0, 0, sizee, sizee, 0, PI / 2);
    }
    pop();
  }

  angle += 0.01;
}
