var arrayToList = function(array) {
  var list = {};
  if (array.length > 0) {
    list.value = array.shift()
    list.rest = arrayToList(array);
  } else {
    return undefined;
  }
  return list;
}

var prepend = function(elem, list) {
  var newList = {}
  newList.value = elem;
  newList.rest = list;
  return newList;
}



console.log('Turn this array ["d","r","a","c","u","l","a"]" into a list');
var output = arrayToList(["r","a","c","u","l","a"])
console.log(output)

console.log('\nSeems that I missed a "d". prepend to the rescue')
console.log(prepend("d", output))