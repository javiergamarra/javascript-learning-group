for (var i = 1; i < 9; i++) {
    var string = "";
    for (var j = 1; j < 9; j++) {
        if (i % 2 === 0) {
            if (j % 2 === 0) {
                string += " ";
            } else {
                string += "#";
            }
        } else {
            if (j % 2 === 0) {
                string += "#";
            } else {
                string += " ";
            }
        }
    }
    console.log(string);
}
