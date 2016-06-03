"use strict";

function tailAndHead(arr){
    return arr.map(String)
              .reduce((x, y, i, r) => i == 0 ? [] : x.concat(Number(r[i-1][r[i-1].length - 1]) + Number(y[0])), [])
              .reduce((a, b) => a* b);
}

console.log(tailAndHead([123,456,789,12,34,56,78]));
