var Ship = require('./ship');
var Universe = require('./universe');

var universe  = window.universe = new Universe();

var enterprise = new Ship();

universe.push(enterprise);

universe.start();

// universe.on('tick', console.log);
