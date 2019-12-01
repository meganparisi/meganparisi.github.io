//Week4 icm assignment by Jingyi
//Learn how to make rain drop from https://editor.p5js.org/amandamje/sketches/ByMkKkV0
//Thanks to the help of resident Seho

var rain = [];
var rainingNow = true;
var bgcolor = (100, 100, 100);
var img
var canvas 

function setup() {
  canvas = createCanvas(screen.width, screen.height);
  //frameRate(60);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  for (i = 0; i < 100; i++) {
    rain[i] = new Rain(random(50, 550), random(0, -3000));
  }
}

function draw() {
  background(bgcolor);

  //Rain();
  //console.log(mouseX, mouseY);

  //Check if it's raining or sunny
  if (rainingNow == true) {
    //background(100);
    for (i = 0; i < rain.length; i++) {
      rain[i].dropRain();
      rain[i].splash();
    }
  } else {
    drawSun();
    //background(160,209,230); 
  }
}


function Rain(x, y) {
  this.x = x;
  this.y = y;
  //this.gravity = 9.8;
  this.length = 15;
  this.r = 0;
  this.opacity = 200;


  this.dropRain = function() {
    noStroke();
    fill(255);
    //rect(this.x, this.y,3,15);
    ellipse(this.x, this.y, 3, this.length);
    this.y = this.y + 6 //+ frameCount/60;
    if (this.y > 540) {
      this.length = this.length - 5;
      //this.y= random(0,-100);
    }
    if (this.length < 0) {
      this.length = 0;
    }
  }

  this.splash = function() {
    strokeWeight(2);
    //stroke(245, 200/frameCount);
    stroke(245, this.opacity);
    noFill();
    if (this.y > 540) {
      ellipse(this.x, 550, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 10;

      //keep the rain dropping
      if (this.opacity < 0) {
        this.y = random(0, -100);
        this.length = 15;
        this.r = 0;
        this.opacity = 200;
      }
    }
  }
}


function mousePressed() {
  //background(160,209,230);
  rainingNow = false;
  //Change to blue sky
  bgcolor = (160, 209, 230);
}

  
function drawSun() {

  fill(245, 187, 87);
  stroke(245, 187, 87);
  push();
  translate(100, 80);
  rotate(radians(frameCount / 2));
  ellipse(0, 0, 60, 60);
  line(0, -60, 0, -40);
  line(0, 40, 0, 60);
  line(-45, -45, -30, -30);
  line(45, -45, 30, -30);
  line(-60, 0, -40, 0);
  line(40, 0, 60, 0);
  line(-45, 45, -30, 30);
  line(45, 45, 30, 30);
  pop();
  noFill();
}
