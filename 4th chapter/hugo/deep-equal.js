var deepEqual = function (a, b) {
    if (a === b) {
        return true;
    } else if (a && b && typeof a == typeof b && typeof a == 'object') {
        for (var property in a) {
            if (!deepEqual(a[property], b[property])) {
                return false
            }
        }
        return Object.keys(a).length == Object.keys(b).length;
    }
    return false
};

var a = {1: 1, 2: 2};
var b = {1: 1, 2: 2};
console.log('1 === 1: ', deepEqual(1, 1));
console.log(a, b);
console.log(deepEqual(a, b));
console.log('null === null: ', deepEqual(null, null));
console.log('null === a:', deepEqual(null, a));
console.log('0 == \'0\':', deepEqual(0, "0"));
var c = {1: 1, 2: 2, 3: 3};
console.log(deepEqual(a, c));
