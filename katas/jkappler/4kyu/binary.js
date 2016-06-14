"use strict";

function pad(str, n) {
    let strLength = str.length;

    if (strLength < n) {
        str = new Array(n - strLength).fill("0").join("") + str;
    }

    return str;
}

function add(a, b) {
    let maxLength = a.length > b.length ? a.length : b.length;
    let normA = pad(a, maxLength),
        normB = pad(b, maxLength),
        carry = 0,
        result = "";

    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = Number(normA[i]) + Number(normB[i]) + carry;
        let toAdd = (sum == 0 || sum == 2) ? 0 : 1;

        carry = (sum == 2 || sum == 3) ? 1 : 0;

        result = toAdd.toString() + result;
    }

    if (carry > 0) {
        result = carry.toString() + result;
    }

    return result.replace(/^[0][0]*/, '');

};

console.log(add('111', '10'));
