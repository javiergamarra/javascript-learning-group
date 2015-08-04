var size = 15;
var odd_patttern = "";
var even_patttern = "";
for (var i = 0; i < size; i++) {
    if (i % 2 == 0) {
        odd_patttern += "#";
        even_patttern += " ";
    } else {
        odd_patttern += " ";
        even_patttern += "#";
    }
}
for (var i = 0; i < size; i++) {
    if (i % 2 == 0) {
        console.log(even_patttern);
    } else {
        console.log(odd_patttern);
    }
}
