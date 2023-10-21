let drops = [];
let plunkSound, frogSound, thunderSound, rainSound;
let sound = [];

function preload() {
  plunkSound = loadSound('Droplet noises.mp3');
  frogSound = loadSound('Frog noises.mp3');
  thunderSound = loadSound('Thunder noises.mp3');
  rainSound = loadSound('Rain noises.mp3');
  splashSound = loadSound('Boot noises.mp3');
  sound = [plunkSound, frogSound, thunderSound, rainSound, splashSound];
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawClouds();
  for (let i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].fall();
  }
}

function drawClouds() {
  for (let j = 0; j < 2; j++) {
    let x = 100 + j * 200;
    let y = 100 + j * 100;
    let size = 50 + j * 30;
   
    noStroke();
    fill(255);
    for (let i = -1; i <= 1; i++) {
      ellipse(x + i * size / 2, y, size, size);
      ellipse(x, y + i * size / 4, size, size);
    }
  }
}

function mouseClicked() {
  drops.push(new Drop(mouseX, mouseY));
  sound[int(random(5))].play();
}

class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 8;
    this.speed = 5;
  }

  show() {
    noStroke();
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = height;
    }
  }
}
