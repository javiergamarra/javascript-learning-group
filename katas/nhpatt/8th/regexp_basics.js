String.prototype.digit = function () {
    return /^\d$/.test(this) && this < 10;
};

console.log("2".digit());