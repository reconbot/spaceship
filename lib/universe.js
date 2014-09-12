var Universe = function(opt) {
  this.canvas = opt.renderer;
  this.simulating = false;
  this.boundTick = this.tick.bind(this);
  this.tickCount = 0;
  this.lastTickOn = null;
  this.simulationTime = 0;
  this.ships = [];
};

Universe.prototype.start = function() {
  this.simulating = true;
  this.lastTickOn = null;
  window.requestAnimationFrame(this.boundTick);
  return this;
};

Universe.prototype.stop = function() {
  this.simulating = false;
};

Universe.prototype.tick = function(timestamp) {
  this.tickAccounting(timestamp);

  // do something
  this.ships.forEach(function(ship){
    ship.tick(this);
  }.bind(this));

  this.render();

  if (this.simulating) {
    window.requestAnimationFrame(this.boundTick);
  }
};

Universe.prototype.tickAccounting = function(timestamp){
  this.tickCount += 1;

  if (!this.lastTickOn) {
    this.lastTickOn = timestamp;
  }
  this.timeSinceLastTick = timestamp - this.lastTickOn;
  this.lastTickOn = timestamp;
  this.simulationTime += this.timeSinceLastTick;
  this.fps = this.simulationTime / this.tickCount;
};

Universe.prototype.push = function(ship) {
  this.ships.push(ship);
};

Universe.prototype.render = function(){
  this.canvas.render(this);
};


module.exports = Universe;
