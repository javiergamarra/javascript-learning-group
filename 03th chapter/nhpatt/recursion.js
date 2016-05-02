function isEven(x) {
    if (x == 0) {
        return true;
    } else if (x == 1) {
        return false;
    } else if (x < 0) {
        return isEven(x + 2);
    } else {
        return isEven(x - 2);
    }
}

console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(40));
console.log(isEven(41));
console.log(isEven(-1));
console.log(isEven(-2));