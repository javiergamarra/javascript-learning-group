function printChessBoard(size){
    var arr = Array.apply(null, Array(size)).map(function (x, i) { if(i % 2 == 0) {return '#'} else {return ' '} }),
        board = '',
        removed;

    for(var i = 0; i < size; i++) {
        arr.splice(0, 1);
        arr.push(arr[1]);
        board += arr.join('') + '\n';
    }

    console.log(board);
}
