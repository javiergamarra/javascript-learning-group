"use strict";

function battle(player1, player2) {
    let len = player1.length > player2.length ? player2.length : player1.length,
        p1, p2, s1, s2;

    p1 = player1.slice(0, len);
    p2 = player2.slice(0, len);

    s1 = p1.filter((v, i) => p2[i][0] < v[1]).concat(player1.slice(len));
    s2 = p2.filter((v, i) => p1[i][0] < v[1]).concat(player2.slice(len));

    return {'player1': s1, 'player2': s2}
}

let player1 = [[1, 1], [2, 1], [2, 2], [5, 5]];
let player2 = [[1, 2], [1, 2], [3, 3]];
console.log(battle(player1, player2));
