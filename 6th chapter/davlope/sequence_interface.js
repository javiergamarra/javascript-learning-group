// Your code here.
function RangeSeq(start, end) {
    this.counter = 0;
    this.elements = new Array(end - start + 1).fill().map((x, i) => start + i);
    this.limit = this.elements.length;
}
RangeSeq.prototype.next = function () {
    if (this.hasNext()) {
        console.log(this.elements[this.counter]);
    }
    this.counter += 1;
};
RangeSeq.prototype.hasNext = function () {
    return this.counter < this.limit && this.counter < this.elements.length
};
RangeSeq.prototype.iterate = function (limit) {
    this.limit = limit || this.elements.length;
    while (this.hasNext()) {
        this.next();
    }
};

function ArraySeq(elements) {
    this.counter = 0;
    this.elements = elements;
    this.limit = this.elements.length;
}
ArraySeq.prototype.next = function () {
    if (this.hasNext()) {
        console.log(this.elements[this.counter]);
    }
    this.counter += 1;
};
ArraySeq.prototype.hasNext = function () {
    return this.counter < this.limit && this.counter < this.elements.length
};
ArraySeq.prototype.iterate = function (limit) {
    this.limit = limit || this.elements.length;
    while (this.hasNext()) {
        this.next();
    }
};

function logFive(seq) {
    seq.iterate(5);
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
