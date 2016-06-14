"use strict";

function countWords_v1(str) {
    if (str.trim().length == 0) {
        return 0;
    }

    var arr = str.split("");

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt(0) == 10 || arr[i].charCodeAt(0) == 13 || arr[i].charCodeAt(0) == 65279) {
            arr[i] = " ";
        }
    }

    return arr.join("").replace(/\s\s+/g, ' ').trim().split(" ").length;
}

function countWords_v2(str) {
    return str.match(/\b\S+\b/g).length;
}
