// Array to store the drops
let drops = [];
// Variables to store different sounds
let plunkSound, frogSound, thunderSound, rainSound, splashSound;
// Array to store all the sounds
let sound = [];

// Preload function to load the sounds before setup
function preload() {
  // Loading different sounds
  plunkSound = loadSound('Droplet noises.mp3');
  frogSound = loadSound('Frog noises.mp3');
  thunderSound = loadSound('Thunder noises.mp3');
  rainSound = loadSound('Rain noises.mp3');
  splashSound = loadSound('Boot noises.mp3');
  // Storing the sounds in an array
  sound = [plunkSound, frogSound, thunderSound, rainSound, splashSound];
}

function setup() {
  // Creating a canvas of size 400x400
  createCanvas(400, 400);
}

function draw() {
  // Setting background color
  background(220);
  // Drawing clouds
  drawClouds();
  // Displaying and updating each drop's position
  for (let i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].fall();
  }
}

// Function to draw clouds
function drawClouds() {
  for (let j = 0; j < 2; j++) {
    // Calculating positions and size of the clouds
    let x = 100 + j * 200;
    let y = 100 + j * 100;
    let size = 50 + j * 30;

    noStroke();
    fill(255);
    // Drawing cloud shapes
    for (let i = -1; i <= 1; i++) {
      ellipse(x + i * size / 2, y, size, size);
      ellipse(x, y + i * size / 4, size, size);
    }
  }
}

// Function to add drops on mouse click
function mouseClicked() {
  // Adding a new drop at the mouse's position
  drops.push(new Drop(mouseX, mouseY));
  // Playing a random sound from the array of sounds
  sound[int(random(5))].play();
}

// Class representing a drop
class Drop {
  constructor(x, y) {
    // Initializing position and properties of the drop
    this.x = x;
    this.y = y;
    this.radius = 8;
    this.speed = 5;
  }

  // Function to display the drop
  show() {
    noStroke();
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  // Function to simulate the fall of the drop
  fall() {
    // Increasing the y position to simulate falling
    this.y += this.speed;
    // Resetting the position if the drop reaches the bottom of the canvas
    if (this.y > height) {
      this.y = height;
    }
  }
}
