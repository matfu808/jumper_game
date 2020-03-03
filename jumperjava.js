function jumper() {
  this.x = 0;
  this.y = 0;
  this.gravity = 0.5; //the force of gravity
  this.lift = -10; // the opposing force of gravity when jumping
  this.velocity = 0; //speed of gravity force.
  
  // I am builing a function to display on the screen this is where I put my values of what the jumper will look like
  this.show = function() {
    fill(255,0,0);
    ellipse(this.x, this.y, 50, 50);
  }
  //build a function called up that will take the initial velocity and modify by opposing gravity.
  this.up = function() {
    this.velocity += this.lift; //adds 10 to velocity
  }
  
  //this will continously update the jumper
  this.update = function() {
    this.velocity += this.gravity; //velocity will contiue to pull player to ground
    this.y += this.velocity;
    this.velocity *= 0.9; //air resistance, slows down fall
    
    //This will prevent the jumper from leaving the ground.
    if (this.y > h) { // if y is greater then h
    this.y = h; // then y can only be h
    this.velocty = 0; //so velocity stop
  }
  //This will prevent jumper from leaving the ceiling
  if (this.y < 0) {
    this.y = 0;
    this.velocity = 0;
  }
 }
}