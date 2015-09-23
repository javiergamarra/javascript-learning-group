//Exercise 3 v1 (Incorrect)
function exercise3(gridsize, symbol) {
    for (var i = 0; i < gridsize; i++) {
        var currentLine = i % 2 ? "" : " ";
        for (var j = 0; j < gridsize / 2; j++) {
            currentLine += symbol + " ";
        }
        console.log(currentLine);
    }
}
//exercise3(8, '#');


//Exercise 3 v2
var printBoard = function (size) {
    for (var i = 0; i < size; i++) {
        var row = "";
        for (var j = 0; j < size; j++) {
            row += (i + j) % 2 ? "#" : " ";
        }
        console.log(row);
    }
};

printBoard(8, '#');