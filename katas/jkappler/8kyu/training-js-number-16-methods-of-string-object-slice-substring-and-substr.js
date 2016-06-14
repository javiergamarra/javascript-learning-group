function cutIt(arr){
    var min = arr.reduce(
        function(a, b) {
            return a < b.length ? a : b.length;
        }, Number.MAX_SAFE_INTEGER)

    return arr.map(function(s) { return s.substr(0, min) })
}
