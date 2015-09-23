//Exercise countChars
var countChar = function (str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
};

var countBs = function (str) {
    return countChar(str, "B");
};

console.log('How many Bs are there in "BabeloBia":', countBs("BabeloBia"));