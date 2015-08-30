var delay = 10;
var charHeightRatio = 1.7;

function loadWorld(canvasSize) {

    var canvas = document.getElementById('electronic_life');
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'black';

    var matrix = transformToMatrix(world.toString());

    var columns = matrix[0].length;
    var rows = matrix.length;
    var cellWidth = canvasSize / Math.max(columns, rows * charHeightRatio);

    function print() {
        matrix = transformToMatrix(world.toString());

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {

                ctx.fillStyle = calculateColor(matrix[i][j]);

                var x = cellWidth * j;
                var y = cellWidth * i * charHeightRatio;
                ctx.fillRect(x, y, cellWidth, cellWidth * charHeightRatio);
                ctx.strokeRect(x, y, cellWidth, cellWidth * charHeightRatio);
            }
        }

        world.turn();

        setTimeout(print, delay);
    }

    print();
}

function transformToMatrix(world) {
    var j = 0;
    var matrix = [];
    matrix[j] = [];
    for (var i = 0; i < world.length; i++) {
        var element = world[i];
        if (element == '\n') {
            j++;
            matrix[j] = [];
        } else {
            matrix[j].push(world[i]);
        }
    }
    return matrix;
}

function calculateColor(element) {
    switch (element) {
        case '#':
            return 'black';
        case 'o':
            return 'red';
        case ' ':
            return 'white';
        case '~':
            return 'yellow';
        case '*':
            return 'green';
        case 'O':
            return 'blue';
        case '@':
            return 'orange';
    }
    return 'pink';
}

