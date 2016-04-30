"use strict";

function nextBigger(n) {
    let array = ('' + n).split("");
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i - 1] < array[i]) {
            let rest = array.slice(i - 1);

            let index = findNextBiggest(rest, array[i - 1]);
            let max = rest[index];
            rest.splice(index, 1);
            return parseInt(array.slice(0, i - 1).join('') + max + rest.sort().join(''));
        }
    }
    return -1;
}

function findNextBiggest(arr, x) {
    let max;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > x && arr[i] <= (arr[max] || 9)) {
            max = i;
        }
    }
    return max;
}

// console.log(nextBigger(2017), 2071);
// console.log(nextBigger(12), 21);
// console.log(nextBigger(144),414);
// console.log(nextBigger(1234567890), 1234567908);
console.log(nextBigger(459853), 483559);
// 59884848459853
// Expected: 59884848483559, instead got: 493558