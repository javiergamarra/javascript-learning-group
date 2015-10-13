//imported code
function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};



// custom code
function StretchCell(inner, x, y) {
	this.inner = inner;
	this.width = x;
	this.height = y;
};

StretchCell.prototype.minWidth = function() {
  return this.inner.minWidth() > this.width ? this.inner.minWidth() : this.width;
};
StretchCell.prototype.minHeight = function() {
  return this.height; //Should it be also checked agains inner property?
};

StretchCell.prototype.draw = function(){
	return this.inner.draw(this.width, this.height);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]