function every_v1(array, predicate) {
    array.forEach(function (entry) {
        if (!predicate(entry)) return false;
    });

    return true;
}

function every_v2(array, predicate) {
    var filter = array.filter(function (entry) {
        return predicate(entry);
    });

    return array.length == filter.length;
}

function some_v1(array, predicate) {
    array.forEach(function (entry) {
        if (predicate(entry)) return true;
    });

    return false;
}

function some_v2(array, predicate) {
    var filter = array.filter(function (entry) {
        return predicate(entry);
    });

    return filter.length > 0;
}

console.log(every_v1([NaN, NaN, NaN], isNaN));
// → true
console.log(every_v1([NaN, NaN, 4], isNaN));
// → false
console.log(some_v1([NaN, 3, 4], isNaN));
// → true
console.log(some_v1([2, 3, 4], isNaN));
// → false
console.log(every_v2([NaN, NaN, NaN], isNaN));
// → true
console.log(every_v2([NaN, NaN, 4], isNaN));
// → false
console.log(some_v2([NaN, 3, 4], isNaN));
// → true
console.log(some_v2([2, 3, 4], isNaN));
// → false