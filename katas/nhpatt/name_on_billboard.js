"use strict";

function billboard(name, price = 30) {
    let total = 0;
    for (let c of name) {
        total += price;
    }
    return total;
}

let Test = {
    assertEquals: console.log
};

Test.assertEquals(billboard("Jeong-Ho Aristotelis"), 600);
Test.assertEquals(billboard("Abishai Charalampos"), 570);
Test.assertEquals(billboard("Idwal Augustin"), 420);
Test.assertEquals(billboard("Hadufuns John", 20), 260);
Test.assertEquals(billboard("Zoroaster Donnchadh"), 570);
Test.assertEquals(billboard("Claude Miljenko"), 450);
Test.assertEquals(billboard("Werner Vígi", 15), 165);
Test.assertEquals(billboard("Anani Fridumar"), 420);
Test.assertEquals(billboard("Paolo Oli"), 270);
Test.assertEquals(billboard("Hjalmar Liupold", 40), 600);
Test.assertEquals(billboard("Simon Eadwulf"), 390);