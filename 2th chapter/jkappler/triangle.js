function printTriangle(height) {
    for (var i = 1; i <= height; i++) {
        var leaf = '';
        for (var j = 0; j < i; j++) {
            leaf += '#';
        }
        console.log(leaf);
    }
}
