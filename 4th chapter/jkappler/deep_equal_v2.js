function isObject(obj) {
    return typeof obj === "object" && obj != null;
}

function deepEqual(obj1, obj2) {
    if (isObject(obj1) && isObject(obj2)) {
        for (var key in obj1) {
            if (obj1.hasOwnProperty(key)) {
                if (!(key in obj2) || !deepEqual(obj1[key], obj2[key])) {
                    return false;
                }
            }
        }
    }
    else if (obj1 !== obj2) {
        return false;
    }

    return Object.keys(obj1).length == Object.keys(obj2).length;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 2, lol: 3}));