//Exercise isEven recursively
var isEven = function (number) {
    if (number < 0)
        return isEven(-number);
    else if (number > 1)
        return isEven(number - 2)
    else {
        return number == 0 ? true : false;
    }
}

console.log('isEven(17): ', isEven(17))
console.log('isEven(-8): ', isEven(-8))