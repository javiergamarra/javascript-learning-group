function range(start, end, step) {
    if (typeof step == 'undefined') {
        start < end ? step = 1 : step = -1;
    }

    var range_array = [];
    for (var range_element = start; start < end ? range_element <= end : range_element >= end; range_element += step) {
        range_array.push(range_element);
    }
    return range_array;
}

function sum(numbers_array) {
    var total_sum = 0;
    for (var number_index = 0; number_index < numbers_array.length; number_index++) {
        total_sum += numbers_array[number_index];
    }
    return total_sum;
}
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
