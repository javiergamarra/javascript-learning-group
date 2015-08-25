var reverseArray = function (arrayValue) {
    var valueArray = [];
    for (var i = 1; i <= arrayValue.length; i++) {
        valueArray.push(arrayValue[arrayValue.length - i]);
    }
    return valueArray;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([1, 2, 3, 4]));