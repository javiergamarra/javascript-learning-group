function sum(numbers) {
    return numbers.reduce(function (a, b) {
        return a + b;
    })
}

function range(start, end, step) {
    var step = step || 1;
    var range = [];

    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            range.push(i);
        }
    } else {
        for (var i = start; i >= end; i += step) {
            range.push(i);
        }
    }
    return range;
}

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2, -1)));
