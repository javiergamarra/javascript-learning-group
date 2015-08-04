var size = 15;
var oddPattern = "";
var evenPattern = "";
for (var i = 0; i < size; i++) {
    if (i % 2 == 0) {
        oddPattern += "#";
        evenPattern += " ";
    } else {
        oddPattern += " ";
        evenPattern += "#";
    }
}
for (var i = 0; i < size; i++) {
    if (i % 2 == 0) {
        console.log(evenPattern);
    } else {
        console.log(oddPattern);
    }
}
