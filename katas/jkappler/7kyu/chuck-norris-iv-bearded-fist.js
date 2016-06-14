"use strict";

function fistBeard(arr) {
    return arr.reduce((a, b) => a.concat(b))
        .map(a => String.fromCharCode(a))
        .join("");
}

console.log(fistBeard([[78], [117, 110, 99], [104, 117], [107, 115]]));
