function deepEqual(obj, another) {
    if (obj === another) {
        return true;
    } else if (obj && another && typeof obj === "object" && typeof another === "object") {
        for (var prop in obj) {
            if (!(prop in another) || !deepEqual(obj[prop], another[prop])) {
                return false;
            }
        }
        return Object.keys(obj).length == Object.keys(another).length;
    }
    return false;
}


var obj = {here: {is: "an"}, object: 2, with: undefined};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2, with: undefined}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 2, with: undefined, and: 1}));
// → false