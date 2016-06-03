"use strict";

function padIt(str,n){
    let x = 0,
        answer = str;

    while(x < Math.ceil(n / 2)){
        answer = "*" + answer;
        x++;
    }

    while(x < n){
        answer += "*";
        x++;
    }

    return answer;
}

function padItArray(str,n){
    let x = Math.ceil(n / 2);
    let y = n - x;

    let left = new Array(x).fill("*");
    let right = new Array(y).fill("*");

    return left.join("") + str + right.join("");
}

console.log(padIt("a",5));

/*
Interesante
let right = n >> 1;
 let left = n - right;
*/
