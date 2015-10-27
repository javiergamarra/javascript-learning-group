// Your code here.
function Vector(x, y) {
    this.x = x;
    this.y = y;
    Object.defineProperty(this, 'length',
        {value: Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))});
}
Vector.prototype.plus = function (otherVector) {
    return new Vector(this.x + otherVector.x, this.y + otherVector.y);
};
Vector.prototype.minus = function (otherVector) {
    return new Vector(this.x - otherVector.x, this.y - otherVector.y);
};

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
