var yellow;
var squiggle1;

function setup(){
      createCanvas(windowWidth, windowHeight);
    squiggle1 = new squiggle();
}

function draw() {
        background(96,211,216);
    squiggle1.runFromMouse();
    
}


/// need an ellipse, a triangle
//possibly as a class, so they can float and move
//mouse position could be used to force them around

function squiggle(){
   this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 10;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {  
    fill(220,234,92);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  this.runFromMouse = function(){
      var margin = 10;
      if( abs(mouseX - this.x) <= margin){
          this.move();
      }
      this.display();
  }
}