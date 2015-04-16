(function() {

  function Words(phrase) {
    words = phrase.split(/\s+/);
    var myObject = {};

    words.forEach( function(word) {
      if ( myObject.hasOwnProperty(word) ) {
        myObject[word] += 1;
      } else {
       myObject[word] = 1;
      }
    });

    return myObject;
  }

  module.exports = Words;
})();
