"use strict";

function differenceInAges(ages){
    let arr = ages.sort((a, b) => a - b);

    console.log(arr);

    let minAge = arr[0],
        maxAge = arr[arr.length - 1];

    return [minAge, maxAge, maxAge - minAge]
}

console.log(differenceInAges([ 46, 86, 33, 29, 87, 47, 28, 12, 1, 4, 78, 92 ]));
