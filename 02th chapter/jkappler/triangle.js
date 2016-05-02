function printTriangle(height) {
    var leaf = '';
    for (var i = 1; i <= height; i++) {
        leaf += '#';
        console.log(leaf);
    }
}

printTriangle(5);