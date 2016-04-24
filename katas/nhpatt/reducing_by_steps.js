"use strict";

function gcdi(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y > 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

const lcmu = (a, b) => Math.abs(a) * (Math.abs(b) / gcdi(a, b));
const som = (a, b) => a + b;
const maxi = (a, b) => a > b ? a : b;
const mini = (a, b) => a < b ? a : b;

function operArray(fct, arr, init) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fct(arr[i], i - 1 < 0 ? init : newArr[i - 1]);
    }
    return newArr;
}

var a = [18, 69, -90, -78, 65, 40];

var r = [18, 3, 3, 3, 1, 1];
var op = operArray(gcdi, a, a[0]);
console.log(op, r);
r = [18, 414, 2070, 26910, 26910, 107640];
op = operArray(lcmu, a, a[0]);
console.log(op, r);
r = [18, 87, -3, -81, -16, 24];
op = operArray(som, a, 0);
console.log(op, r);
r = [18, 18, -90, -90, -90, -90];
op = operArray(mini, a, a[0]);
console.log(op, r);
r = [18, 69, 69, 69, 69, 69];
op = operArray(maxi, a, a[0]);
console.log(op, r);