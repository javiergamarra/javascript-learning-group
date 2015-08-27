function GameOfLife(size) {
    this.size = size;
    this.deadCell = '_';
    this.aliveCell = '*';

    this.createWorld = function (size) {
        var world = [];
        for (var i = 0; i < size; i++) {
            world[i] = [];
            for (var j = 0; j < size; j++) {
                world[i][j] = this.deadCell;
            }
        }
        return world;
    };

    this.alive = function (x, y) {
        if (x >= 0 && y >= 0 && x < size && y < size) {
            return this.world[x][y] == this.aliveCell;
        }
        return false;
    };

    this.neighbours = function (x, y) {
        var neighbours = 0;
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                if (i != 0 || j != 0) {
                    neighbours += this.alive(i + x, j + y) ? 1 : 0;
                }
            }
        }
        return neighbours;
    }
}

GameOfLife.prototype.init = function (size, number) {
    this.world = this.createWorld(size);
    while (number > 0) {
        var randomX = Math.floor(Math.random() * size);
        var randomY = Math.floor(Math.random() * size);
        if (!this.alive(randomX, randomY)) {
            this.world[randomX][randomY] = this.aliveCell;
            number--;
        }
    }
};

GameOfLife.prototype.initWithPattern = function (size, number) {
    this.world =
        [
            ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_', '*', '*', '_', '_', '_'],
            ['_', '_', '_', '_', '_', '*', '*', '_', '_', '_'],
            ['_', '_', '_', '*', '*', '_', '_', '_', '_', '_'],
            ['_', '_', '_', '*', '*', '_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
            ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_']
        ];
};

GameOfLife.prototype.print = function () {
    this.world.forEach(function (row) {
        var textRow = row.reduce(function (total, cell) {
                return total + ' ' + cell;
            }
        );
        console.log(textRow);
    });
    console.log();
};

GameOfLife.prototype.step = function () {
    var newWorld = [];

    for (var i = 0; i < this.size; i++) {
        newWorld[i] = [];
        for (var j = 0; j < this.size; j++) {

            var neighbours = this.neighbours(i, j);
            var alive = (neighbours == 2 && this.alive(i, j)) || neighbours == 3;
            newWorld[i][j] = alive ? this.aliveCell : this.deadCell;
        }
    }

    this.world = newWorld;
};

//var size = 5;
//var gol = new GameOfLife(size);
//gol.init(size, 10);
//gol.print();
//gol.step();
//gol.print();