function isEven(a) {
    if (a >= 0) {
        if (a === 0) {
            return true;
        } else if (a === 1) {
            return false;
        } else {
            return isEven(a - 2);
        }
    } else {
        return isEven(-a);
    }
}

var numero = isEven(-24);

if (!numero) {
    console.log("Es par");
} else {
    console.log("Es impar");
}
