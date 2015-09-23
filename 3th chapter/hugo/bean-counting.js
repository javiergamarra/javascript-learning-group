//Exercise countChars
var countChar = function(str, char) {
  var count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == char)
      count++;
  }
  return count;
}

var countBs = function(str) {
  return countChar(str, "B");
}

console.log('How many Bs are there in "BabeloBia":', countBs("BabeloBia"))