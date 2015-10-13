function isObject(obj) {
    return typeof obj1 == "object" && obj1 != null;
}

function deepEqual(obj1, obj2) {

    if (isObject(obj1) && isObject(obj2)) {
        var obj1Keys = Object.keys(obj1);

        for (var i = 0; i < obj1Keys.length; i++) {
            var key = obj1Keys[i];

            if (!(key in obj2)) {
                return false;
            }
            return deepEqual(obj1[key], obj2[key]);
        }
    }
    else if (obj1 !== obj2) {
        return false;
    }

    return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
