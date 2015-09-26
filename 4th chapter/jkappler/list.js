function arrayToList(arr) {
    if(arr.length == 0){
        return null;
    }

    return {
        value: arr[0],
        rest: arrayToList(arr.splice(1, arr.length))
    }

}

function listToArray(list) {
    var arr = [];

    for(var node = list; node; node = node.rest){
        console.log(node.value);
        arr.push(node.value);
    }
}
