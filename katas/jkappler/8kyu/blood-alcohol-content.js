"use strict";

function bloodAlcoholContent(drinks, weight, sex, time) {
    let r = (sex === 'female' ? 0.66 : 0.73);

    return Number(((drinks.ounces * drinks.abv * 5.14 / weight * r) - 0.015 * time).toFixed(4));
}

console.log(bloodAlcoholContent({ounces: 12.5, abv: 0.4}, 190, 'male', 1));
