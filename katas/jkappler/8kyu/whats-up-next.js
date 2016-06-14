"use strict";

function nextItem(xs, item) {
    let found = false;

    for(let x of xs) {
        if(found) {
            return x;
        }

        if(x === item) {
            found = true;
        }
    }

    return undefined;
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5));
