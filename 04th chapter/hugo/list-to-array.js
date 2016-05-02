var arrayToList = function (array) {
    var list = {};
    if (array.length) {
        list.value = array.shift();
        list.rest = arrayToList(array);
        return list;
    }
    return null;
};

var listToArray = function (list) {
    var array = [list.value];
    return list.rest ? array.concat(listToArray(list.rest)) : array;
};

console.log('Turn list into array');
var input = arrayToList(["d", "r", "a", "c", "u", "l", "a"]);
var output = listToArray(input);
console.log(output);


