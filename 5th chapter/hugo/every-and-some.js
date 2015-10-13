function every(array, test) {
    console.log("Every --> Received array:", array);
    return array.length ? test(array[0]) && every(array.splice(1), test) : true;
}

function some(array, test) {
    console.log("Some --> Received array:", array);

    if (array.length) {
        return test(array[0]) || some(array.splice(1), test)
    }
    return false;
}

console.log("every", every([NaN, NaN, NaN], isNaN));
// → true
console.log("every", every([NaN, NaN, 4], isNaN));
// → false
console.log("some", some([NaN, 3, 4], isNaN));
// → true
console.log("some", some([2, 3, 4], isNaN));
// → false