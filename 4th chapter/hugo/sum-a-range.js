//Exercise range & sum
var range = function (first, last, optionalStep) {
    var array = [];
    var step = optionalStep || 1;

    while (step > 0 ? last >= first : first >= last) {
        array.push(first);
        first += step;
    }

    return array;
};

var sum = function (numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};

console.log('Get range from 1 to 10 with step 2');
console.log(range(1, 10, 2));
console.log('And the sum of that is: ');
console.log(sum(range(1, 10, 2)) + '\n');

console.log('Get range from 15 down to 2, with step -2');
console.log(range(15, 2, -2));
console.log('And the sum of that is: ');
console.log(sum(range(15, 2, -2)) + '\n');
