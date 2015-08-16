function reverseArray(inputArray) {
    var reversedArray = [];
    for (var itmeIndex = inputArray.length - 1; itmeIndex >= 0; itmeIndex--) {
        reversedArray.push(inputArray[itmeIndex]);
    }
    return reversedArray;
}

function reverseArrayInPlace(inputArray) {
    var arraySize = inputArray.length;
    var end = arraySize - 1;
    for (var start = 0; start < arraySize / 2; start++) {
        var temp = inputArray[start];
        inputArray[start] = inputArray[end];
        inputArray[end] = temp;
        end--;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
