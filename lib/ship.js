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
  if (this.speed) {
    this.speed -= 1;
  }
};

Ship.prototype.thrust = function(power) {
  this.speed += power;
};

Ship.prototype.rotate = function(rotate) {
  var angle = this.angle[0] + rotate;
  angle = angle % 360;
  if (angle < 0 ){
    angle = angle + 360
  }
  this.angle[0] = angle;
};


module.exports = Ship;
