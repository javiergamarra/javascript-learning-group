function IteratorSequence(array) {
	console.log("New IteratorSequence", array);
	this.data = array;
	this.index = 0;
	this.length = array.length;
};

IteratorSequence.prototype.isFinalPosition = function() {
	return this.index >= this.data.length;
};

IteratorSequence.prototype.nextItem = function() {
	var result = this.getCurrentItem();
	this.index++;
	return result;
};

IteratorSequence.prototype.getCurrentItem = function() {
	return this.data[this.index];
};


var logFive = function(array) {
	var iterator = new IteratorSequence(array);
	console.log(iterator.isFinalPosition());
	console.log(iterator.getCurrentItem());
	console.log(iterator.nextItem());
	console.log(iterator.isFinalPosition());
	console.log(iterator.nextItem());
	console.log(iterator.isFinalPosition());

}


logFive(new IteratorSequence([1, 2]));
// → 1
// → 2
//logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104

