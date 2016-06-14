"use strict";

function diff(str){
    let values = str.map(x => Math.abs(eval(x)));
    let maxValue = values.reduce((a, b) => a > b ? a : b);

    return maxValue != 0 ? str[values.indexOf(maxValue)] : false;
}

console.log(diff(['23-32','32-23','2-6','98-98','100-101']));
