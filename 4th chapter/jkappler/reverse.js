function reverseArray(arr) {
    var result = [];

    for (var i = arr.length; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

function reverseArrayInPlace(arr) {
    var arrayLength = arr.length - 1;

    for (var i = 0; i <= arrayLength / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arrayLength - i];
        arr[arrayLength - i] = temp;
    }
}
