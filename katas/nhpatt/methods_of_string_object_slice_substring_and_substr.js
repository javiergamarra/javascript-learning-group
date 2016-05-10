"use strict";

function cutIt(arr) {
    let minLength = arr.reduce((a, b) => a.length > b.length ? b : a).length;
    return arr.map(a => a.slice(0, minLength));
}

let Test = {
    assertSimilar: console.log
};

Test.assertSimilar(cutIt(["ab", "cde", "fgh"]), ["ab", "cd", "fg"]);
Test.assertSimilar(cutIt(["abc", "defgh", "ijklmn"]), ["abc", "def", "ijk"]);
Test.assertSimilar(cutIt(["codewars", "javascript", "java"]), ["code", "java", "java"]);

// const minLength = Math.min(...arr.map(x => x.length));