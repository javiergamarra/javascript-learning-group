var range = function (from, to, increment) {
    var results = [];
    var step = increment || 1;

    for (var i = from; (to >= from) ? (i <= to) : (to <= i); i += step) {
        results.push(i);
    }

    return results;
};

console.log(range(1, 10, 1));