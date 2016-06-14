"use strict";

function pad(str, n) {
    let strLength = str.length;

    if (strLength < n) {
        str = new Array(n - strLength).fill("0").join("") + str;
    }

    return str;
}

function sumStrings(a, b) {
    let maxLength = a.length > b.length ? a.length : b.length;
    let normA = pad(a, maxLength),
        normB = pad(b, maxLength),
        result = "",
        carry = 0;

    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = Number(normA[i]) + Number(normB[i]) + carry;
        let toAdd = sum - (sum < 10 ? 0 : 10);

        carry = (sum < 10 ? 0 : 1);

        result = toAdd.toString() + result;
    }

    if (carry > 0) {
        result = carry.toString() + result;
    }

    return result.replace(/^[0][0]*/, '');
}

console.log(sumStrings("00103", "08567"));
