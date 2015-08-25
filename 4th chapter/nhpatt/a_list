function arrayToList(array) {
    var list = array.length > 0 ? {value: array[0]} : {};

    var element = list;
    for (var i = 1; i < array.length; i++) {
        element.rest = {value: array[i], rest: null};
        element = element.rest;
    }
    return list;
}

function listToArray(list) {
    var array = [];
    while (list != null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function prepend(element, list) {
    return {value: element, rest: list};
}

function nth(list, element) {
    if (list == null) {
        return undefined;
    } else if (element == 0) {
        return list.value;
    } else {
        return nth(list.rest, element - 1);
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20