function every(array, test) {
	console.log("Every --> Received array:", array);
	return array.length == 0 ? true : test(array[0]) && every(array.splice(1), test);
}

function some(array, test) {
	console.log("Some --> Received array:", array);
	return array.length == 0 ? false : test(array[0]) || some(array.splice(1), test);
}

console.log("every", every([NaN, NaN, NaN], isNaN));
// → true
console.log("every", every([NaN, NaN, 4], isNaN));
// → false
console.log("some", some([NaN, 3, 4], isNaN));
// → true
console.log("some", some([2, 3, 4], isNaN));
// → false