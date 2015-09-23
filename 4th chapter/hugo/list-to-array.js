var arrayToList = function (array) {
    var list = {};
    if (array.length > 0) {
        list.value = array.shift()
        list.rest = arrayToList(array);
    } else {
        return undefined;
    }
    return list;
}

var listToArray = function (list) {
    var array = [];
    array.push(list.value)
    if (list.rest) {
        return array.concat(listToArray(list.rest))
    } else {
        return array;
    }
}


console.log('Turn list into array');
var input = arrayToList(["d", "r", "a", "c", "u", "l", "a"])
var output = listToArray(input)
console.log(output)


