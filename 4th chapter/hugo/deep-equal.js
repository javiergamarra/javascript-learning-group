var deepEqual = function (a, b) {
    if (a == b) {
        return true;
    } else {
        if (a && b && typeof a == typeof b && typeof a == 'object' && a.length == b.length) {
            for (var property in a) {
                if (!deepEqual(a[property], b[property])) {
                    return false
                }
            }
            return true;
        } else {
            return false
        }

    }

}

var a = {1: 1, 2: 2}
var b = {1: 1, 2: 2}
console.log('1 === 1: ', deepEqual(1, 1))
console.log(a, b)
console.log(deepEqual(a, b))
console.log('null === null: ', deepEqual(null, null))
console.log('null === a:', deepEqual(null, a))
