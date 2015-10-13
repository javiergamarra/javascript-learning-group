for (var i = 1; i <= 100; i++) {
    console.log(calculate(i));
}

function calculate(i) {
    switch (true) {
        case (i % 15 == 0):
            return 'FizzBuzz';
        case (i % 3 == 0):
            return 'Fizz';
        case (i % 5 == 0):
            return 'Buzz';
        default:
            return i;
    }
}

