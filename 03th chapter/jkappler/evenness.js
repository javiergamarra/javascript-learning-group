function isEven(number) {
    number = Math.abs(number);

    if (number == 0) {
        return true;
    }
    else if (number == 1) {
        return false;
    }
    else {
        return isEven(number - 2);
    }
}
