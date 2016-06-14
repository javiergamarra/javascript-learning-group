const recoverSecret = triplets => {
    let letter = column(triplets).filter(c => column(triplets, 1).indexOf(c) == -1 && column(triplets, 2).indexOf(c) == -1);
    if (!letter.length) {
        return ''
    }
    triplets = triplets.map(t => t[0] == letter ? t.slice(1) : t);
    return letter + recoverSecret(triplets)
};

const column = (triplets, i = 0) => [...new Set(triplets.map(x => x[i]))];

secret1 = "whatisup";
triplets1 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
];

Test = {};

Test.assertEquals = console.log;

Test.assertEquals(recoverSecret(triplets1), secret1);