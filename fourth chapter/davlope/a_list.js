function arrayToList(array){
    var list = null;
    for(var index=array.length - 1; index >= 0; index--){
        list = prepend(array[index], list);
    }
    return list;
}
function listToArray(list){
    var array = [];
    var listIter = list;
 	while (listIter != null){
      array.push(listIter.value);
      listIter = listIter.rest;
 	}    
    return array;
}
function prepend(item, list){
	return {value: item, rest:list}
}
function nth(list, position){
  var index = 0;
  var listIter = list;
  while (index <= position && listIter != null){
      if (index == position){
          var value = listIter.value;
          break;
      }
      index ++;
      listIter = listIter.rest;
  }
  return value;
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
