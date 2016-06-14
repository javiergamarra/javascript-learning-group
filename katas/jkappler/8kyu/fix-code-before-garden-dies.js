"use strict";

function rainAmount(mm){
    if (mm < 40) {
         return `You need to give your plant ${40 - mm} mm of water`;
    }

    return "Your plant has had more than enough water for today!"
}

console.log(rainAmount(39));
