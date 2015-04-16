var Anagram = function(word) {
  this.word = word.toLowerCase();
  var wordsAr = [];

  function matches(words) {
    if (typeof words === 'string') {
      words = Array.prototype.slice.call(arguments);
    }

    words.forEach( function(word) {
      tempWord = word.toLowerCase();
      if ( tempWord !== this.word && sort(tempWord) === sort(this.word) )
        wordsAr.push(word);
    });

    return wordsAr;
  }

  function sort(word) {
    return word.split('').sort().join('');
  }

  return {matches: matches};

}

module.exports = Anagram;

