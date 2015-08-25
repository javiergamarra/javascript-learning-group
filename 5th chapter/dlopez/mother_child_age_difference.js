function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function motherAgeWhenChildBorn(p) {
  if (p.mother in byName){
  	return p.born - byName[p.mother].born;
  }
}

function isUndefined(value) {
  return typeof value != 'undefined';
}

console.log( average(ancestry.map(motherAgeWhenChildBorn).filter(isUndefined)))
// → 31.2
