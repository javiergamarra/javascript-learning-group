"use strict";

function squaresOnly(arr) {
    return arr.filter(x => Math.sqrt(x) == parseInt(Math.sqrt(x)));
}

console.log(squaresOnly([0,1,2,3,4,5,6,7,8,9,10]));

//Más corto: Math.sqrt(x) % 1 == 0
