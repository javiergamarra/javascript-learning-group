var arrayToList = function (array) {
    var list = {};
    if (array.length) {
        list.value = array.shift();
        list.rest = arrayToList(array);
        return list;
    }
    return null;
};

var prepend = function (elem, list) {
    return {value: elem, rest: list};
};


console.log('Turn this array ["d","r","a","c","u","l","a"]" into a list');
var output = arrayToList(["r", "a", "u", "l", "a"]);
console.log(output);

console.log('\nSeems that I missed a "d". prepend to the rescue');
console.log(prepend("d", output));