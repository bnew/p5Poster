var yellow;

var squiggles = [];
var img;

/*
todo:
squiggle
export rest of text
create filld in overlay things
xperiment w sound
xperiment with camera / star wars effect
*/

function setup(){
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 25 ; i++)
    {
     squiggles.push(new squiggle());
    }
    img = loadImage("not-another.png");
    //noLoop();
}

function draw() {

    camera(0, 0, sin(frameCount * 0.01) * 100);

        background(96,211,216);

    for (var i = 0; i < squiggles.length; i++){
        squiggles[i].runFromMouse();
    }


    image(img,mouseX-img.width/2,mouseY-img.height/2);
//    texture(img);
//    plane(img.width, img.height);
    
}
function mousePressed(){
    fullscreen(true);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
/// need an ellipse, a triangle, custom shape

function squiggle(){
this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 20);
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.speed = 5;
    this.shape = random(["ellipse","triangle"]);
    this.theta = random(3);

        
  this.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  };


  this.display = function() {  
    fill(220,234,92);
    noStroke();
      if ( this.shape == "ellipse") ellipse(this.x, this.y, this.diameter, this.diameter);
      else if (this.shape == "triangle") this.drawTriangle();
  }
  this.runFromMouse = function(){
      var margin = width/20;
      if( abs(mouseX - this.x) <= margin && abs(mouseY - this.y) <= margin){
          this.xSpeed = this.calcSpeed(mouseX,this.x);
          this.ySpeed = this.calcSpeed(mouseY,this.y);
          
      }
      /* this would stop the squiggle if you end up out of range.
      else {
         this.xSpeed = 0;
        this.ySpeed = 0;
      }
      */
      
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
  
  this.drawTriangle = function(){
      var x1 = this.x - this.diameter;
      var y1 = this.y + this.diameter;
      var x2 = this.x;
      var y2 = this.y - this.diameter;
      var x3 = this.x + this.diameter;
      var y3 = this.y + this.diameter;
//      
//      fill(220,234,92);
//      noStroke();
      push();
//rotate(this.theta);
      triangle(x1,y1,x2,y2,x3,y3);
      pop();
  }
}