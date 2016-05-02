function reverseArray(array) {
    var arrayReversed = [];
    for (var i = array.length - 1; i >= 0; i--) {
        arrayReversed.push(array[i]);
    }
    return arrayReversed;
}

function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var first = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = first;
    }
    return array;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));