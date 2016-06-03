"use strict";

function groupIn10s(){
    if(arguments.length == 0) {
        return [];
    }

    let arr = [],
        maxIndex = 0;

    for(let i = 0; i < arguments.length; i++) {
        let v = arguments[i];

        arr.push(v);

        if(maxIndex < Math.floor(v / 10)) {
            maxIndex = Math.floor(v / 10);
        }
    }

    let solution = new Array(maxIndex + 1);

    for(let a of arr) {
        let pos = Math.floor(a / 10);

        if(solution[pos] == undefined) {
            solution[pos] = [a];
        }
        else {
            solution[pos].push(a);
            solution[pos].sort();
        }
    }

    return solution;
}

console.log(groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50, 100));
