function MultiplicatorUnitFailure(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}
MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure("MultiplicatorUnitFailure");
}

function reliableMultiply(a, b) {
    // Your code here.
    try {
        return primitiveMultiply(a, b);
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {
            //console.log("Inernal error, retry...");
            return reliableMultiply(a, b);
        } else {
            throw e;
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64
