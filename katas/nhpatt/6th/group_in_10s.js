
function groupIn10s(...array) {
    let results = [];
    for (let i = 0; 10*i <= Math.max(...array); i++) {
        let decile = [];
        for (let j = 0; j < array.length; j++) {
            if (array[j] >= 10*i && array[j] < 10*i+10) {
                decile.push(array[j])
            }
        }
        if (decile.length) {
            results[i] = decile.sort();
        }
    }
    return results
}

console.log(groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50), [[3, 8], [12, 17, 19], [25], [35, 38], , [50]]);