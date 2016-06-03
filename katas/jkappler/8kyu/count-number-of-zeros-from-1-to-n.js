"use strict";

function countZeros(n) {
    let arr = '';

    for(let i = 1 ; i <= n; i++) {
        arr = arr + i;
    }

    return arr.split('').filter(a => a === '0').length;
}

console.log(countZeros(110));
