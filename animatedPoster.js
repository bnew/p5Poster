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
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.speed = 5;

  this.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  };


  this.display = function() {  
    fill(220,234,92);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  this.runFromMouse = function(){
      var margin = width/20;
      if( abs(mouseX - this.x) <= margin && abs(mouseY - this.y) <= margin){
          this.xSpeed = this.calcSpeed(mouseX,this.x);
          this.ySpeed = this.calcSpeed(mouseY,this.y);
          
      }else {
         // this.xSpeed = 0;
          //this.ySpeed = 0;
      }
      //slow down and change direction when you hit a wall
      if(this.x < 0) this.xSpeed = 1;
      else if(this.x > width )this.xSpeed = -1;
      
      if(this.y < 0) this.ySpeed = 1;
      else if (this.y > height) this.ySpeed = -1;
      
      
      this.move();
      this.display();
      
  }
  this.calcSpeed = function (mouse, pos){
      if(mouse<pos) return this.speed;
      else if (mouse == pos) return 0;
      else if (mouse > pos) return -this.speed;
  }
}