var Bob = function() {};

Bob.prototype.hey = function(input) {
  if( input.trim() == "" ) return "Fine. Be that way!"
  if( input == input.toUpperCase() && (/[A-Za-z]/).test(input) ) return "Whoa, chill out!";
  if ( input.slice(-1) == "?" ) return "Sure.";
  return "Whatever.";
};
