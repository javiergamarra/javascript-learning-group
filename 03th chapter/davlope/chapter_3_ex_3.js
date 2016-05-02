function countChar(s, c) {
    var counter = 0;
    for (var i = 0; i < s.length - 1; i++) {
        if (s.charAt(i) == c) {
            counter++;
        }
    }
    return counter;
}
function countBs(s) {
    return countChar(s, 'B');
}
console.log(countBs("sdfghjk"));
console.log(countBs("DFGHJFKGH"));
console.log(countBs("ABFGRUEYBTBRTBbbbbbbbb"));

console.log(countChar("sdfghjkasdfgh", 'a'));
console.log(countChar("DFGHJFKGH", 'F'));
console.log(countChar("ABFGRUEYBTBRTBbbbbbbbb", 'b'));

console.log(countChar("sdfghjk", 'B'));
console.log(countChar("DFGHJFKGH", 'B'));
console.log(countChar("ABFGRUEYBTBRTBbbbbbbbb", 'B'));
