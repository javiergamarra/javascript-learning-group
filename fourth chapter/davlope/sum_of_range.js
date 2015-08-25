function range(start, end, step) {
    if (!step) {
        step = start < end ? 1 : -1;
    }

    var rangeArray = [];
    for (var rangeElement = start; start < end ? rangeElement <= end : rangeElement >= end; rangeElement += step) {
        rangeArray.push(rangeElement);
    }
    return rangeArray;
}

function sum(numbersArray) {
    var totalSum = 0;
    for (var numberIndex = 0; numberIndex < numbersArray.length; numberIndex++) {
        totalSum += numbersArray[numberIndex];
    }
    return totalSum;
}
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
