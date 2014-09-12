var Canvas = function(opt) {
  this.el = opt.el;
  this.height = opt.height;
  this.width = opt.width;
  this.ctx = this.el.getContext("2d");
  this.stats = opt.stats;

  this.drawShipBound = this.drawShip.bind(this);

  this.setup();
};

Canvas.prototype.setup = function() {
  this.el.setAttribute("style", "width:500px;height: 500px;");
  this.ctx.fillStyle = "#000000";
  this.ctx.fillRect(0,0,this.width, this.height);
};

Canvas.prototype.render = function(universe) {
  this.stats.innerHTML = universe.fps;
  this.ctx.fillStyle = "#000000";
  this.ctx.fillRect(0,0,this.width, this.height);
  universe.ships.forEach(this.drawShipBound);
};

Canvas.prototype.drawShip = function(ship){
  var ctx = this.ctx;
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.moveTo(ship.x, ship.y);
  ctx.translate(ship.x, ship.y);
  ctx.rotate(ship.angle[0] * Math.PI * 180);
  ctx.lineTo(- 5, + 10)
  ctx.lineTo(+ 5, + 10)
  ctx.lineTo(0, 0);
  ctx.fill();
  ctx.closePath();
  ctx.rotate(-1 * ship.angle[0] * Math.PI * 180);
  ctx.translate(- ship.x, -ship.y);
};

module.exports = Canvas;
