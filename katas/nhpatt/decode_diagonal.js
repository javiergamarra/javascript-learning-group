function getDiagonalCode(grid) {
    grid = grid.split("\n").map(c => c.trim().split(" "));

    let max = Math.max(...grid.map(r => r.length));
    let j = 0;
    let acc = true;
    let str = "";
    for (let i = 0; i < max && grid[j][i]; i++) {
        str += grid[j][i];
        acc = acc ? j != grid.length - 1 : j == 0;
        j += acc ? 1 : -1;
    }
    return str;
}

var grid = (
    "C \n" +
    "D o F C A E A s ! \n" +
    "G H d E L A r \n" +
    "L M N e P a F \n" +
    "X Z R P W"
);
var results = getDiagonalCode(grid);
console.log(results, "CodeWars");

var grid = (
    "q z J H M z D v H B H A E D G x s C C t H K w y s G K I q L t K D E J w L \n" +
    "K p v r v z C y K M o p D y o y r n \n" +
    "M E w B C p F n M s M J E s u A r J G F L v t r F B H E E D y E x A z F L q s r"
); // note nothing on the middle line so parsing should end.
var results = getDiagonalCode(grid);
console.log(results, 'qpwrMzFyHMMpEyuysnG');