"use strict";

function preFizz(n) {
    let arr = [];

    for(let i = 1; i <= n; i++){
        arr.push(i);
    }

    return arr;
}

console.log(preFizz(5)); //Array should be from 1 to 5
