"use strict";

function MultiplicatorUnitFailure() {
    this.message = 'Error multiplying';
    this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = 'MultiplicatorUnitFailure';

function primitiveMultiply(a, b) {

    var random = Math.random();
    if (random > 0.5) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure();
    }
}

function wrapMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (error) {
        if (error instanceof MultiplicatorUnitFailure) {
            return wrapMultiply(a, b);
        } else {
            return error.message;
        }
    }
}

console.log(wrapMultiply(2, 3));