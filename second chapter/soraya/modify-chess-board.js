var dimension = Number(prompt("Introduce numero de filas y columnas:"));
for (var i = 1; i < dimension + 1; i++) {
    var board = "";
    for (var j = 1; j < dimension + 1; j++) {
        if (i % 2 === 0) {
            if (j % 2 === 0) {
                board += " ";
            } else {
                board += "#";
            }
        } else {
            if (j % 2 === 0) {
                board += "#";
            } else {
                board += " ";
            }
        }
    }
    console.log(board);
}
