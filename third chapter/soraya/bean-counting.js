function countsB (a){
    var numB=0;
    for (var i=0; i<a.length; i++){
        if (a.charAt(i)==="B"){
            numB++;
        }
    }
    return numB;
}

function countsBa (a){    
    return countChar(a, "B");
}

function countChar(a, c){
    var num=0;
    for (var i=0; i<a.length; i++){
        if (a.charAt(i)===c){
            num++;
        }
    }
    return num;
}

console.log(countsB("BbbabbB"));
console.log(countsBa("BbbabbB"));
console.log(countChar("BbbabbB","b"));
