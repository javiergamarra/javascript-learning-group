function countBs(s) {
    return countChar(s, "B");
}

function countChar(s, l) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) == l) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BaBeasdB"));
console.log(countChar("BaBeasdB", "a"));