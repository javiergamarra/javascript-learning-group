for (var i = 1; i <= 100; i++) {
    switch(true){
        case (i % 15 == 0):
            console.log('FizzBuzz');
            break;
        case (i % 3 == 0):
            console.log('Fizz');
            break;
        case (i % 5 == 0):
            console.log('Buzz');
            break;
    }
}
