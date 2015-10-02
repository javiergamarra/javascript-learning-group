function deepEqual(obj1, obj2) {

    if(typeof obj1 == "object" && obj1 != null &&
       typeof obj2 == "object" && obj2 != null) {
    
        var arrObj1 = Object.keys(obj1).sort();
        var arrObj2 = Object.keys(obj2).sort();
        
        if(arrObj1.length != arrObj2.length) {
            return false;
        }
        
        for(var i = 0; i < arrObj1.length; i++) {
            if(arrObj1[i] !== arrObj2[i]) {
                return false;
            }
            return deepEqual(obj1[arrObj1[i]], obj2[arrObj2[i]]);
        }
        
    } 
    else if(obj1 !== obj2) {
        return false;
    }
    
    return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true