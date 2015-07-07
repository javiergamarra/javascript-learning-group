for (var i = 1; i < 9; i++){
	var cadena = "";
	for (var j = 1; j < 9; j++){		
		if (i % 2 === 0){
			if (j % 2 === 0){
				cadena = cadena + " ";
			}else{
				cadena = cadena + "#";
			}
		}else{
			if (j % 2 === 0){
				cadena = cadena + "#";
			}else{
				cadena = cadena + " ";
			}
		}		
	}
	console.log (cadena);
}
