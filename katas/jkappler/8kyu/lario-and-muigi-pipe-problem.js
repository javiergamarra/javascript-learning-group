"use strict";

function pipeFix(numbers) {
    let res = [];

    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        res.push(i);
    }

    return res;
}
