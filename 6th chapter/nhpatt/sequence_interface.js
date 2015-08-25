//Sequence.prototype.hasNext = function () {
//Sequence.prototype.next = function () {

function logFive(seq) {
    for (var i = 0; i < 5; i++) {
        if (seq.hasNext()) {
            console.log(seq.next());
        }
    }
}

function ArraySeq(array) {
    this.array = array;
    this.position = 0;
}

ArraySeq.prototype.hasNext = function () {
    return this.array.length > this.position;
};

ArraySeq.prototype.next = function () {
    var element = this.array[this.position];
    this.position++;
    return element;
};

function RangeSeq(min, max) {
    this.min = min;
    this.max = max;
}

RangeSeq.prototype.hasNext = function () {
    return this.min < this.max;
};

RangeSeq.prototype.next = function () {
    return this.min++;
};

logFive(new ArraySeq([1, 3]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104