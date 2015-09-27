function printChessBoard(size) {
    var mark = [' ', '#'];
    var board = '';

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            board += mark[((i + j) % 2) == 0 ? 0 : 1];
        }
        board += '\n';
    }

    console.log(board);
}
