var Ship = require('./ship');
var Universe = require('./universe');
var Canvas = require('./canvas');

var universe  = window.universe = new Universe({
  renderer: new Canvas({
    el: document.getElementById('space'),
    stats: document.getElementById('stats'),
    width: 500,
    height: 500
  }),
  width: 500,
  height: 500
});
universe.start();

var enterprise = new Ship();
universe.push(enterprise);
enterprise.x = 100;
enterprise.y = 100;

setInterval(function() {
  enterprise.rotate(1);
  enterprise.thrust(5);
}, 200)
