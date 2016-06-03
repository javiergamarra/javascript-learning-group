"use strict";

function sumConsecutives(arr){
    let tmp = arr.map(x => [x, x]),
        solution = [];

    for(let t of tmp) {
        if(solution.length == 0) {
            solution.push(t);
        }
        else {
            let s = solution[solution.length - 1];

            if(s[0] == t[0]) {
                s[1] += t[1];
            }
            else {
                solution.push(t);
            }
        }
    }

    return solution.map(a => a[1]);
}

console.log(sumConsecutives([-5,-5,7,7,12,0]));
