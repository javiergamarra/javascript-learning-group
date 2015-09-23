//Exercise range & sum
var range = function (first, last, step) {
    var array = [];
    if (first == last) {
        return array;
    } else {

        var extraNumber = 0;
        if (step) {
            extraNumber = step;
        }

        if (first < last) {
            for (var position = first; position <= last; position += extraNumber || 1) {
                array.push(position);
            }
        } else {
            for (var position = first; position >= last; position += extraNumber || -1) {
                array.push(position);
            }
        }
    }
    return array;
}


var sum = function (numbers) {
    var total = 0;
    for (var position = 0; position < numbers.length; position++) {
        total += numbers[position];
    }
    return total;
}

console.log('Get range from 1 to 10 with step 1')
console.log(range(1, 10, 2))
console.log('And the sum of that is: ')
console.log(sum(range(1, 10, 2)) + '\n')

console.log('Get range from 15 down to 2, with step -2')
console.log(range(15, 2, -2))
console.log('And the sum of that is: ')
console.log(sum(range(15, 2, -2)) + '\n')
