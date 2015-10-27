// Your code here.
function Seq() {
    this.counter = 0;
    this.elements = [];
    this.limit = this.elements.length;
}
Seq.prototype.next = function () {
    if (this.hasNext()) {
        console.log(this.elements[this.counter]);
    }
    this.counter += 1;
};
Seq.prototype.hasNext = function () {
    return this.counter < this.limit && this.counter < this.elements.length
};
Seq.prototype.iterate = function (limit) {
    this.limit = limit || this.elements.length;
    while (this.hasNext()) {
        this.next();
    }
};
function RangeSeq(start, end) {
    this.counter = 0;
    this.elements = new Array(end - start + 1).fill().map((x, i) => start + i);
    this.limit = this.elements.length;
}
RangeSeq.prototype = Object.create(Seq.prototype);

function ArraySeq(elements) {
    this.counter = 0;
    this.elements = elements;
    this.limit = this.elements.length;
}
ArraySeq.prototype = Object.create(Seq.prototype);

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
