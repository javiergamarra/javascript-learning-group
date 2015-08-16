function range(start, end, step) {
    if (typeof step == 'undefined') {
        start < end ? step = 1 : step = -1;
    }

    var rangeArray = [];
    for (var rangeElement = start; start < end ? rangeElement <= end : rangeElement >= end; rangeElement += step) {
        rangeArray.push(rangeElement);
    }
    return range_array;
}

function sum(numbersArray) {
    var totalSum = 0;
    for (var numberIndex = 0; numberIndex < numbersArray.length; numberIndex++) {
        totalSum += numbers_array[numberIndex];
    }
    return totalSum;
}
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
