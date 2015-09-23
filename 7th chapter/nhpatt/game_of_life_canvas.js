function loadGameOfLife(size, rows, seed) {


    var gol = new GameOfLife(rows);
    gol.init(rows, seed);

    var canvas = document.getElementById('game_of_life');
    var ctx = canvas.getContext('2d');
    var rowWidth = size / rows;

    var delay = 50;

    function print() {

        ctx.strokeStyle = 'orange';
        ctx.fillStyle = 'red';
        ctx.strokeRect(0, 0, size, size);

        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < rows; j++) {
                var height = rowWidth * i;
                var width = rowWidth * j;

                if (gol.alive(i, j)) {
                    ctx.fillRect(height, width, rowWidth, rowWidth);
                } else {
                    ctx.clearRect(height, width, rowWidth, rowWidth);
                    ctx.strokeRect(height, width, rowWidth, rowWidth);
                }
            }
        }
    }

    function printAndStep() {
        print();
        gol.step();

        setTimeout(printAndStep, delay);
    }

    printAndStep();
}

