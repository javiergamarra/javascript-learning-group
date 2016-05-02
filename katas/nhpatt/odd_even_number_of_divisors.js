"use strict";

function oddity(n) {
    if (n == 1) {
        return 'odd';
    }

    let number = 2;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            number++;
            let d = n / i;
            if (d != i)
                number++;
        }
    }
    return number % 2 ? 'odd' : 'even';
}

oddity = n => (n ** 0.5) % 1 ? 'even' : 'odd';

console.log(oddity(1), 'odd');
console.log(oddity(5), 'even');
console.log(oddity(16), 'odd');
console.log(oddity(234), 'even');
// [1, 234, 2, 3, 39, 13]