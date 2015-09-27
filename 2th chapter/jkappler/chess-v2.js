function printChessBoard(size) {

    var arr = Array.apply(null, new Array(size)).map(function (x, i) {
        return i % 2 ? ' ' : '#';
    });
    var board = '';

    for (var i = 0; i < size; i++) {
        arr.shift();
        arr.push((arr.length + i) % 2 ? '#' : ' ');
        board += arr.join('') + '\n';
    }

    console.log(board);
}

printChessBoard(8);