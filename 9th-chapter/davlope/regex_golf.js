// Fill in the regular expressions
verify(/ca[r|t]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/p[r]?op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/^ferr[e|y|a]/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s[\.|,|;\:]/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/^\w{6,}$/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/[^e]/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
