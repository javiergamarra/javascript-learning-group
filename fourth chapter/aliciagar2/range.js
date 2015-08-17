var range = function (from, to, increment) {
    var rango = [];

    for (i = from;
    (to >= from) ? (i <= to) : (to <= i);
    (i += increment || 1)) {
        rango.push(i);
    }

    return rango;

}
