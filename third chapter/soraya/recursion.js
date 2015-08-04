function isEven (a){
    if (a>=0){
        if (a===0){
          return true;
        }else if(a===1){
          return false;
          }else{
            isEven (a-2);
          }
    }else{
        return false;
    }
}

var numero = isEven (25);

if(!numero){
    console.log("Es par");
}else{
    console.log("Es impar");
}
