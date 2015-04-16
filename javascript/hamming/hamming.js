var compute = function(first, second) {
  var firstAr = first.split('');
  var secondAr = second.split('');
  var total = 0;

  if ( firstAr.length !== secondAr.length )
      throw new Error('DNA strands must be of equal length.');

  firstAr.map(function(letter, index){
    if (secondAr[index] !== letter) total++;
  });

  return total;
}

exports.compute = compute;
