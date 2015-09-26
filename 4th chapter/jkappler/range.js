function sum_v1(arr) {
    var counter = 0;

    for(var i = 0; i < arr.length; i++){
        counter += arr[i];
    }

    return counter;
}

function sum_v2(arr) {
    var counter = 0;

    arr.forEach(function(entry){
        counter += entry;
    });

    return counter;
}

function sum_v3(arr) {
    return arr.reduce(function(x, y){ return x + y});
}

function range(x, y, z) {
    var arr = [];

    if(z == undefined || z == 0) {
        z = 1;
    }

    if(z > 0){
        for(var i = x; i <= y; i+=z){
            arr.push(i);
        }
    }
    else{
        for(var i = x; i >= y; i+=z){
            arr.push(i);
        }
    }

    return arr;
}
