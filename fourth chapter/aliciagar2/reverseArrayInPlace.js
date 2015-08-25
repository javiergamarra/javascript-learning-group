var reverseArrayInPlace = function (arrayValue) {

    var medio = Math.floor(arrayValue.length / 2);

    for (var i = 0; i < medio; i++) {
        var swap = arrayValue[i];
        arrayValue[i] = arrayValue[arrayValue.length - i - 1];
        arrayValue[arrayValue.length - i - 1] = swap;
    }
    return arrayValue;
};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));