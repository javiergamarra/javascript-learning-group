function arrayToList(arr) {
    if (arr.length) {
        return {
            value: arr[0],
            rest: arrayToList(arr.splice(1, arr.length))
        }
    }
    return null;
}

function listToArray(list) {
    var arr = [];

    for (var node = list; node; node = node.rest) {
        console.log(node.value);
        arr.push(node.value);
    }
}

console.log(arrayToList([2, 3]));
