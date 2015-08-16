function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function centuriesOfDeath(person){
  return Math.ceil(person.died / 100)
}
function minCentury(century, curr){
  return Math.min(century, curr)
}
function maxCentury(century, curr){
  return Math.max(century, curr)
}
function centuryOfDeath(array, century){
  function centuryDeath(person) { 
    return Math.ceil(person.died / 100) == century 
  }
  return array.filter(centuryDeath)
}
function age(p) { 
  return p.died - p.born;
}
var centuries = ancestry.map(centuriesOfDeath);
var minCentury =  centuries.reduce(minCentury);
var maxCentury =  centuries.reduce(maxCentury);
for (var century = minCentury; century <= maxCentury; century ++){
  console.log(century+": "+average(centuryOfDeath(ancestry,century).map(age)).toFixed(1));
}
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
