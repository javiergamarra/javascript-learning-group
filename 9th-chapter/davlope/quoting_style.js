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

var text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(\s')|('\s)|(^')|('$)/g, "\""));
// ? "I'm the cook," he said, "it's my job."
