"use strict";

function logFive(sequence) {
	for(var i = 0; i < 5; i++) {
    	if(!sequence.hasMoreElements()) {
        	return;
        }	
        console.log(sequence.getCurrentElement());
        sequence.moveNext();
    }
}

function ArraySeq(array) {
    this.array = array;
    this.position = 0;
}

ArraySeq.prototype.moveNext = function() {
    if(!this.hasMoreElements()){    
        throw "Uh oh...please, don't try to get more elements than the sequence has.... :)";
    }
    
    this.position++;
};

ArraySeq.prototype.hasMoreElements = function() {
    return this.position < this.array.length;
};

ArraySeq.prototype.getCurrentElement = function() {
    return this.array[this.position];
};

function RangeSeq(start, end) {
    if(start > end) {
    	throw "Pretty please, respect the numbers xDDDD";
    }
    
    this.position = start;
    this.end = end;
}

RangeSeq.prototype.moveNext = function() {
    if(!this.hasMoreElements()){    
        throw "Uh oh...please, don't try to get more elements than the sequence has.... :)";
    }
    
    this.position++;
};

RangeSeq.prototype.hasMoreElements = function() {
    return this.position < this.end;
};

RangeSeq.prototype.getCurrentElement = function() {
    return this.position;
};

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104