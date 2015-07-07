// Your code here.
min = function (uno, otro){
  if(uno <= otro){
    return uno
  }
  return otro;
}


// Your code here.
isEven = function (numero){
  if(numero<0){
  return   isEven(-numero);
  }
  if (numero==0){
    return true;
  }
  if (numero==1){
    return false;
  }
  return isEven(numero-2);
  
};