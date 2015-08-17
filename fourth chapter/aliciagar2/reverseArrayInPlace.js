
var reverseArrayInPlace = function (arrayValue) {
    var rango = [];
    var medio = Math.floor(arrayValue.length / 2);
    console.log(medio);
    for (i = 0; i < medio; i++) {
        var swap = arrayValue[i];
        arrayValue[i] = arrayValue[arrayValue.length - i - 1];
        arrayValue[arrayValue.length - i - 1] = swap;
    }
};
