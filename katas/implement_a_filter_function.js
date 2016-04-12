"use strict";

Array.prototype.filter = function (fun) {
    let filtered = [];

    for (let i = 0; i < this.length; i++) {
        if (fun(this[i])) {
            filtered.push(this[i]);
        }
    }
    return filtered;
};

console.log([1, 2, 3, 4].filter((num)=> {
    return num > 3
}));