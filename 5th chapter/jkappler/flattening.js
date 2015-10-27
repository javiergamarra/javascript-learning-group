function flatten_array(arr) {
    return arr.reduce(function (acc, curr) {
        return acc.concat(curr);
    });
}

console.log(flatten_array([[1, 2, 3], [4, 5], [6]]));