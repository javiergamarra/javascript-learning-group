var arrays = [[1, 2, 3], [4,5], [6]];

var array = arrays.reduce(function(array, cur) {
  return array.concat(cur);
}, []);
console.log(array);
// → [1, 2, 3, 4, 5, 6]
