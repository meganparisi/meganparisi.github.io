//Week4 icm assignment by Jingyi
//Learn how to make rain drop from https://editor.p5js.org/amandamje/sketches/ByMkKkV0
//Thanks to the help of resident Seho

var rain = [];
var rainingNow = false;
var sunNow = false
var bgcolor = ('#E2D6FA');
var img
var canvas 

function setup() {
  canvas = createCanvas(screen.width, screen.height);
  //frameRate(60);
  canvas.position(0,120);
  canvas.style('z-index', '-3');
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
  } 
  if (sunNow == true) {
    sun = drawSun();
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


function rainingTrue() {
  //background(160,209,230);
  rainingNow = true;
  setTimeout(function() {
    rainingNow = false;
  }, 5000);
  //Change to blue sky
}

function sunTrue() {
  sunNow = true;
  rainingNow = false;
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

//Other JS starts here 


function changeOpacity3() {
  document.getElementById("cactus2").classList.add("bottom");
}

function changeOpacity4() {
  document.getElementById("cactus3").classList.add("bottom");
}

function changeOpacity5() {
  document.getElementById("cactus4").classList.add("bottom");
}


function changeSun() {
  sun = document.getElementById("sun");
  sun.style.opacity = "1";
  sun.classList.add("animated");
  sun.classList.add("fadeInUp");
  setTimeout(function() {
    sun.classList.remove("animated");
    sun.classList.remove("fadeInUp");
    sun.classList.add("sunGrow");
  }, 1000);
  setTimeout(function() {
    sun.classList.add("sunFade");
  }, 7000);
  
}

function addShake1() {
  element = document.getElementById("question1");
  element.classList.add("animated");
  element.classList.add("shake");
  setTimeout(function() {
    element.classList.remove("animated");
    element.classList.remove("shake");
  }, 1000);
}

function addShake2() {
  element = document.getElementById("question2");
  element.classList.add("animated");
  element.classList.add("shake");
  setTimeout(function() {
    element.classList.remove("animated");
    element.classList.remove("shake");
  }, 1000);
}

function addShake3() {
  element = document.getElementById("question3");
  element.classList.add("animated");
  element.classList.add("shake");
  setTimeout(function() {
    element.classList.remove("animated");
    element.classList.remove("shake");
  }, 1000);
}
