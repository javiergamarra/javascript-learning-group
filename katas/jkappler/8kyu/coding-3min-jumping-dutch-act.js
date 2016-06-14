"use strict";

function sc(floor) {
    if (floor <= 1) {
        return '';
    }

    let arr = Array.apply(null, Array(floor - 1)).map(String.prototype.valueOf, "Aa~");
    arr.push('Pa!');

    return arr.join(' ') + (arr.length > 6 ? '' : ' Aa!');
}

console.log(sc(6));

//Mejor: new Array(floor-1).fill('Aa~');
