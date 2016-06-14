"use strict";

function digitSum(str) {
    let n = String(eval(str.split("").join("+")));

    return +n < 10 ? n : digitSum(n);
}

console.log(digitSum('1011'));
