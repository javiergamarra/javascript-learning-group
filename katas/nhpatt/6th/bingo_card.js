const BINGO = [['B', 5], ['I', 5], ['N', 4], ['G', 5], ['O', 5]];

const getCard = () => [].concat(...Array.from({length: 5}, (l, i) => Array.from({length: BINGO[i][1]}, _ => BINGO[i][0] + (Math.random() * 14 + (1 + 15 * i)))));

console.log(getCard());