"use strict";

Array.prototype.filter = function (fun) {
    let arr = [];
    let thisArg = arguments.length >= 2 ? arguments[1] : void 0;

    for (let i = 0; i < this.length; i++) {
        if (fun.call(thisArg, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}
