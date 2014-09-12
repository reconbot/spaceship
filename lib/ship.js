var Ship = function() {
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.speed = 0;
  this.angle = [0,0]; // alpha, omega
};

Ship.prototype.tick = function() {
  this.y += Math.sin(this.angle[0]) * this.speed;
  this.x += Math.cos(this.angle[0]) * this.speed;
};

Ship.prototype.thrust = function(power) {
  this.speed += power;
};

