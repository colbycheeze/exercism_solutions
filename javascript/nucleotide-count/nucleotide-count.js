var DNA = function(strand) {
  this.strand = strand;
  validSymbols = ['A', 'T', 'C', 'G'];

  if(strand)
    strand.split('').forEach( function(symbol) {
      if(validSymbols.indexOf(symbol) < 0)
        throw Error('Invalid Symbol!');
    });

  return {
    count: function(symbol) {
      if(!strand)
        return 0;

      return strand.split('').filter( function(x) {
        return x === symbol;
      }).length;
    },

    histogram: function() {
      return {A: this.count('A'), T: this.count('T'), C: this.count('C'), G: this.count('G')};
    }
  };
};

module.exports = DNA;
