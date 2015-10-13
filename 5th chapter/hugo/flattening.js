var input = [
    [1],
    [2, 3],
    [4, 5, 6]
];

function flattening(array) {
    return array.reduce(
        function (currentArray, newArray) {
            console.log("previous array is:", currentArray, "new array is:", newArray);
            return currentArray.concat(newArray);
        }, []);

}
console.log("It should turn this:", input, "into", "[ 1, 2, 3, 4, 5, 6 ]");
console.log(flattening(input));
 