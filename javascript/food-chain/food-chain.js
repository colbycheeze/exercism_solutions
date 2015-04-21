var Song = function() {

  var swallowed = [
    {thing: "fly", remark: "I don't know why she swallowed the fly. Perhaps she'll die."},
    {thing: "spider", remark: "It wriggled and jiggled and tickled inside her."},
    {thing: "bird", remark: "How absurd to swallow a bird!"},
    {thing: "cat", remark: "Imagine that, to swallow a cat!"},
    {thing: "dog", remark: "What a hog, to swallow a dog!"},
    {thing: "goat", remark: "Just opened her throat and swallowed a goat!"},
    {thing: "cow", remark: "I don't know how she swallowed a cow!"},
    {thing: "horse", remark: "She's dead, of course!"},
  ];
  var firstThing = swallowed[0].thing;
  var firstRemark = swallowed[0].remark;

  function verse(num) {
    var index = num-1;
    var thing = swallowed[index].thing;
    var remark = swallowed[index].remark;
    var song;

    song = "I know an old lady who swallowed a " + thing + ".\n" +
      (num === 1 ? "" : remark + "\n");

    if (num < swallowed.length)
      song += reasons(index) + firstRemark + "\n";

    return song;
  }

  function verses(from, to) {
    var song = "";

    for (var i = from; i <= to; i++) {
      song += verse(i) + "\n";
    }
    return song;
  }

  // private
  function reasons(index) {
    var thing = swallowed[index].thing;

    if (index > 0) {
      var previousThing = swallowed[index-1].thing;
      previousThing += (index === 2 ? " that wriggled and jiggled and tickled inside her" : "" );

      return "She swallowed the " + thing + " to catch the " + previousThing + ".\n" +
        reasons(index-1);
    } else {
      return "";
    }
  }

  return {
    verses: verses,
    verse: verse
  };
}

module.exports = Song();

