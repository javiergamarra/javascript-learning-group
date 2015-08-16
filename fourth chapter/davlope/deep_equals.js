function deepEqual(obj1, obj2) {
    for (var key in obj1) {
        if (!(typeof (obj1[key]) === typeof (obj2[key]))) {
            return false;
        }
        if (typeof (obj1[key]) === "object" && !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
        if (typeof (obj1[key]) !== "object" && !(obj1[key] === obj2[key])) {
            return false;
        }
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
