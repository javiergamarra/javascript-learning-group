min = function (one, another) {
    if (one <= another) {
        return one;
    }
    return another;
};

isEven = function (number) {
    if (number < 0) {
        return isEven(-number);
    }
    if (number == 0) {
        return true;
    }
    if (number == 1) {
        return false;
    }
    return isEven(number - 2);
};

countBs = function (text) {
    return countChar(text, "B");
};

countChar = function (text, letter) {
    var counter = 0;
    for (var i = 0; i < text.length; i++) {
        counter += (text.charAt(i) == letter);
    }
    return counter;
};