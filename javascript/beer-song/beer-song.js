var Beer  = function() {};
var _ = require('underscore');

Beer.verse = function(num) {

  var verse =
    numBottles(num).capitalize() + " of beer on the wall, " +
    numBottles(num) + " of beer.\n" +
    action(num) + numBottles(num-1) + " of beer on the wall.\n";

  return verse;

};

Beer.sing = function(from, to) {
  if (to === undefined)
    to = 0;

  var song = "";

  _.range(from, to-1, -1).forEach( function(num) {
    song += Beer.verse(num) + (num === to ? '' : '\n');
  });

  return song;
};

//PRIVATE

var numBottles = function(num) {
  num = (num < 0 ? 99 : num);

  if(num < 1)
    return "no more bottles";

  return num + " bottle" + (num > 1 ? 's' : '');
};

var action = function(num) {
  if(num < 1)
    return "Go to the store and buy some more, ";

  return "Take " + (num > 1 ? "one" : "it") + " down and pass it around, ";
};

// Monkey patch ftw?
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

module.exports = Beer;
