"use strict";

function shuffle(arr){
    return arr.map(x => [Math.random(), x])
              .sort((a, b) => a[0] - b[0])
              .map(x => x[1]);
}

console.log(shuffle([9, 8, 7, 6]));
