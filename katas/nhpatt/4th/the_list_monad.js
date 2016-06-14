const moves = [[-2, -1], [-2, +1], [+2, -1], [+2, +1], [-1, -2], [-1, +2], [+1, -2], [+1, +2]];

function canReach(from, to, movements) {
    var squares = knightEngine(from, movements);
    return squares.some(position => position[0] === to[0] && position[1] === to[1]);
}

function moveKnight(from) {
    return moves
        .map(c => [from[0] + c[0], from[1] + c[1]])
        .filter(c => c[0] > 0 && c[0] < 9 && c[1] > 0 && c[1] < 9);
}

function moveKnightRandom(from) {
    var items = moveKnight(from);
    return items[Math.floor(Math.random() * items.length)];
}

function compose(...funs) {
    return (value) => funs.reduceRight((prev, fn) => fn(prev), value);
}

function bind(fun) {
    return val => val.reduce((prev, v) => prev.concat(fun(v)), []);
}

function unit(x) {
    return [x];
}

function knightEngine(from, movements) {
    var move = unit;
    for (let i = 0; i < movements; i++) {
        move = compose(bind(moveKnight), move);
    }
    return move(from);
}

console.log(bind(moveKnight)(bind(moveKnight)([[6, 2]])));

console.log(compose(bind(moveKnight), bind(moveKnight))([[6, 2]]));