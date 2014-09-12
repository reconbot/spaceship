(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}],2:[function(require,module,exports){
var Ship = require('./ship');


var enterprise = new Ship();
enterprise.tick();

},{"./ship":1}]},{},[2]);
