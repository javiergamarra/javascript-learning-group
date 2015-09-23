//Exercise 2: Already with modifications
function FizzBuzz() {
	for (var i = 1; i < 101; i++) {
		var divisibleBy3 = false;
		var divisibleBy5 = false;
		if (i % 3 == 0) divisibleBy3 = true;
		if (i % 5 == 0) divisibleBy5 = true;
		var strToPrint = "" + (divisibleBy3 ? "Fizz" : "") + (divisibleBy5 ? "Buzz" : "");
		console.log(strToPrint.length == 0 ? i : strToPrint);
	}
}
FizzBuzz();