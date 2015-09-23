//Exercise Reverse Array
var reverseArray = function(array) {
  var reversedArray = [];
  var size = array.length;
  for (var position = 0; position < size; position++) {
    reversedArray.push(array.pop());
  }
  return reversedArray;
}

console.log('Reversing array ["d","r","a","c","u","l","a"]"');
console.log(reverseArray(["d","r","a","c","u","l","a"]))