var ToRna = function(nucleotide) {
  var conversion = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };

  return nucleotide.split('').map( function(n) {
    return conversion[n];
  }).join('');

};

module.exports = ToRna;
