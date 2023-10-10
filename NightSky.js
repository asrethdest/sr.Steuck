

let numStars = 200; // Number of stars
let stars = []; // Array to store star positions
let numShootingStars = 5; // Number of shooting stars
let shootingStars = []; // Array to store shooting star positions

function setup() {
  createCanvas(800, 600); 
  
  // Initialize stars
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: random(width), // Random x-coordinate within canvas width
      y: random(height), // Random y-coordinate within canvas height
      radius: random(1, 3), // Random radius for the stars
      brightness: random(50, 255) // Random brightness for the stars
    });
  }
  
  // Make shooting stars
  for (let i = 0; i < numShootingStars; i++) {
    shootingStars.push({
      x: random(width), // Random x-coordinate
      
      y: random(height / 2), // Random y-coordinate 
      
      speed: random(1, 4) // Random speed for the shooting stars
    });
  }
}

function draw() {
  background(0); // Set the background color to black 

  // Draw stars
  for (let i = 0; i < numStars; i++) {
    let star = stars[i];
    fill(255, star.brightness); // Set the fill color with varying brightness
    noStroke();
    ellipse(star.x, star.y, star.radius, star.radius);
  }

  // Update and draw shooting stars
  for (let i = 0; i < numShootingStars; i++) {
    let shootingStar = shootingStars[i];
    fill(255); // Set the fill color to white
    noStroke();
    ellipse(shootingStar.x, shootingStar.y, 2, 2);

    // Move the shooting star
    shootingStar.x -= shootingStar.speed;

    // Reset shooting star when it goes off-screen
    if (shootingStar.x < 0) {
      shootingStar.x = width;
      shootingStar.y = random(height / 2);
      shootingStar.speed = random(1, 4);
    }
  }
}
