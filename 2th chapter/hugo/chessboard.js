//Exercise 3 v1 (Incorrect)
function exercise3(gridsize, symbol) {
    for (i = 0; i < gridsize; i++) {
        var currentLine = i % 2 ? "" : " ";
        for (j = 0; j < gridsize / 2; j++) {
            currentLine += symbol + " ";
        }
        console.log(currentLine);
    }
}
//exercise3(8, '#');


//Exercise 3 v2
var printBoard = function (size, symbol) {
    for (var i = 0; i < size; i++) {
        var row = ""
        for (var j = 0; j < size; j++) {
            row += ((i + j) % 2 == 0 ? " " : "#")
        }
        console.log(row)
    }
}

printBoard(8, '#')