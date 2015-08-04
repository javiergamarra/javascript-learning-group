function countsB(s) {
    var numB = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === "B") {
            numB++;
        }
    }
    return numB;
}

function countsBa(s) {
    return countChar(s, "B");
}

function countChar(s, c) {
    var num = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === c) {
            num++;
        }
    }
    return num;
}

console.log(countsB("BbbabbB"));
console.log(countsBa("BbbabbB"));
console.log(countChar("BbbabbB", "b"));
