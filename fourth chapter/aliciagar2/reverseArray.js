var reverseArray = function (arrayValue) {
    var valueArray = [];
    for (i = 1; i <= arrayValue.length; i++) {
        valueArray.push(arrayValue[arrayValue.length - i]);
    }
    return valueArray;
};
