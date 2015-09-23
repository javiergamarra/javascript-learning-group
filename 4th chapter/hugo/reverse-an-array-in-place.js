var reverseArrayInPlace = function(array) {
  if (array.length < 2) return undefined;

  if (array.length == 2) {
    var aux = array[0];
    array[0] = array[1];
    array[1] = aux;
    return array;
  } else {
    var aux = array.pop();
    reverseArrayInPlace(array)
    array.unshift(aux);
    return array;
  }
}

console.log('Reversing array ["d","r","a","c","u","l","a"]"');
console.log(reverseArrayInPlace(["d","r","a","c","u","l","a"]))