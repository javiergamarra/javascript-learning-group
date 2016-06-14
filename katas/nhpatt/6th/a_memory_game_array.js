"use strict";

const createTiles = n => n % 2 ? [] :
    new Array(n + 1)
        .join('0')
        .split('')
        .map(parseFloat)
        .map((e, i)=>i < n / 2 ? i + 1 : n - i)
        .map(n => [Math.random(), n])
        .sort()
        .map(n =>n[1]);

console.log(createTiles(10));