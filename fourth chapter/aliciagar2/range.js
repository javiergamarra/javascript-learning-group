var range = function (from, to, increment) {
    var rango = [];
    var step = increment || 1;

    for (i = from; (to >= from) ? (i <= to) : (to <= i); i += step) {
        rango.push(i);
    }

    return rango;
};

console.log(range(1, 10, 1));