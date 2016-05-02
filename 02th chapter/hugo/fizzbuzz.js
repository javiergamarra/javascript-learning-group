//Exercise 2: Already with modifications
function FizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        var divisibleBy3 = i % 3 == 0;
        var divisibleBy5 = i % 5 == 0;
        var strToPrint = (divisibleBy3 ? "Fizz" : "") + (divisibleBy5 ? "Buzz" : "");
        console.log(strToPrint || i);
    }
}
FizzBuzz();