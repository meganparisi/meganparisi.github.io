//Code for rain drop when first question is answered correctly
//Code for rain animation taken from here: https://editor.p5js.org/monicawen/sketches/HkU-BCJqm

//Variables for rain 
var rain = [];
var rainingNow = false;
var sunNow = false
var bgcolor = ('#F7BBB5');
var img
var canvas 

//Setting up the canvas for rain drop
function setup() {
  canvas = createCanvas(screen.width, screen.height);
  //frameRate(60);
  canvas.position(0,200);
  canvas.style('z-index', '-3');
  for (i = 0; i < 100; i++) {
    rain[i] = new Rain(random(50, 550), random(0, -3000));
  }
}

//Drawing the rain
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
}

//Drawing the actual rain drops and creating the splash
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

//Setting raining condition to true
function rainingTrue() {
  //background(160,209,230);
  rainingNow = true;
  setTimeout(function() {
    rainingNow = false;
  }, 5000);
  //Change to blue sky
}

//Setting raining condition to false
function sunTrue() {
  sunNow = true;
  rainingNow = false;
}

//Start of Javascript not adopted from outside source

//Functions to make cactus graphics visible as questions are answered in order to give the appearance of flowers growing
function changeOpacity3() {
  document.getElementById("cactus2").classList.add("bottom");
}

function changeOpacity4() {
  document.getElementById("cactus3").classList.add("bottom");
}

function changeOpacity5() {
  document.getElementById("cactus4").classList.add("bottom");
}

//Makes sun visible and animated when question two is answered correctly. Sun disappears after timout
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

//Following functions animate question options to shake when clicked and incorrect
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

//Turns a question option red when it has been clicked and is incorrect
function addRed(obj) {
  obj.style.backgroundColor = '#ff8080';
}

//Turns a question option green when it has been clicked and is correct
function addGreen(obj) {
  obj.style.backgroundColor = '#c6f1d6';
}