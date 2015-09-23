//Exercise Reverse Array
var reverseArray = function (array) {
    var reversedArray = [];
    for (var i = 0, size = array.length; i < size; i++) {
        reversedArray.push(array.pop());
    }
    return reversedArray;
};

console.log('Reversing array ["d","r","a","c","u","l","a"]"');
console.log(reverseArray(["d", "r", "a", "c", "u", "l", "a"]));