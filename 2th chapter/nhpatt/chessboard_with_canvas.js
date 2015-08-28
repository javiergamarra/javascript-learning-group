function loadChessboard(size, rows) {

    var board = createChessboard(rows);

    var canvas = document.getElementById('chessboard');
    var ctx = canvas.getContext('2d');
    var rowWidth = size / rows;

    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.strokeRect(0, 0, size, size);

    var j = 0;
    for (var i = 1; i < board.length; i++) {
        if (board[i] == '#') {
            ctx.fillRect(rowWidth * (i % (rows + 1)), rowWidth * j, rowWidth, rowWidth);
        } else if (board[i] == '\n') {
            j++;
        }
    }
}

