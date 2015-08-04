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

countBs = function (cadena){
  return countChar(cadena);
}
countChar = function (cadena, letra){
  if(!letra){
    letra = 'B'
  }
  var contador=0;
  for (var i = 0; i < cadena.length; i++){
    contador+=(cadena.charAt(i)==letra);
  }  
  return contador;
}
