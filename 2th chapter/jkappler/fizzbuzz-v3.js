for (var i = 1; i <= 100; i++) {
    var message = '';

    if(i % 3 == 0) {
        message = 'Fizz';
    }
    if(i % 5 == 0) {
        message = message + 'Buzz';
    }

    if(message.length > 0) {
        console.log(message);
    }
}
