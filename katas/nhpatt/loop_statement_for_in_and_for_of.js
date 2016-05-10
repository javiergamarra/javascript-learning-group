"use strict";

function giveMeFive(arr) {
    let result = [];
    for (let key in arr) {
        if (key.length == 5) {
            result.push(key)
        }
        if (arr[key].length == 5) {
            result.push(arr[key]);
        }
    }
    return result;
}

let Test = {
    assertSimilar: console.log
};

Test.assertSimilar(giveMeFive({Our: "earth", is: "a", beautyful: "world"}), ["earth", "world"]);
Test.assertSimilar(giveMeFive({Ihave: "enough", money: "to", buy: "a", car: "model"}), ["Ihave", "money", "model"]);
Test.assertSimilar(giveMeFive({Pears: "than", apple: "sweet"}), ["Pears", "apple", "sweet"]);
