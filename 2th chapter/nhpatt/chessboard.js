function createChessboard(size) {
    var board = "";
    for (var i = 0; i < size; i++) {

        for (var j = 0; j < size; j++) {
            board += (i + j) % 2 == 0 ? " " : "#";
        }
        board += "\n";
    }
    return board;
}

console.log(createChessboard(8));
console.log(createChessboard(4));