function battle(player1, player2) {
    let nplayer1 = player1.slice();
    let nplayer2 = player2.slice();
    let max = Math.min(player1.length, player2.length);
    for (let i = max - 1; i >= 0; i--) {
        if (player1[i][1] <= player2[i][0]) {
            nplayer1.splice(i, 1);
        }
        if (player2[i][1] <= player1[i][0]) {
            nplayer2.splice(i, 1);
        }
    }
    return {'player1': nplayer1, 'player2': nplayer2}
}

// const battle = (player1, player2) => {
//     return {
//         player1: player1.filter((c, i) => !player2[i] || c[1] > player2[i][0]),
//         player2: player2.filter((c, i) => !player1[i] || c[1] > player1[i][0]),
//     }
// };

let Test = {
    assertSimilar: console.log
};

let player1, player2, result;
player1 = [[1, 1]];
player2 = [[1, 1]];
result = {'player1': [], 'player2': []};
Test.assertSimilar(battle(player1, player2), result, "Expected 2 empty arrays when all creatures are killed.");

player1 = [[2, 2]];
player2 = [[1, 1]];
result = {'player1': [[2, 2]], 'player2': []};
Test.assertSimilar(battle(player1, player2), result, "Expected player2 to have no creatures.");

player1 = [[1, 1]];
player2 = [[2, 2]];
result = {'player1': [], 'player2': [[2, 2]]};
Test.assertSimilar(battle(player1, player2), result, "Expected player1 to have no creatures.");

player1 = [[1, 1], [2, 1], [2, 2], [5, 5]];
player2 = [[1, 2], [1, 2], [3, 3]];
result = {'player1': [[5, 5]], 'player2': [[1, 2], [3, 3]]};
Test.assertSimilar(battle(player1, player2), result);

result = {'player1': [[1, 2], [3, 3]], 'player2': [[5, 5]]};
Test.assertSimilar(battle(player2, player1), result);

player1 = [];
player2 = [[1, 1], [2, 3], [10, 10]];
result = {'player1': [], 'player2': [[1, 1], [2, 3], [10, 10]]};
Test.assertSimilar(battle(player1, player2), result, "Expected output to equal input. Player1 has no creatures.");