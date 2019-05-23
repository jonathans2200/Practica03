validarCamposObli();
validarCedula();
validarSoloLetras();
validarSoloLetras1();
validarSoloNumero();
validarCorreo();




function validarCamposObli(formulario){
	var cont = 0;
	for (var i =0; i < formulario.length-2; i++){
		var elemento = formulario.elements[i];
		
		if(elemento.value == null || elemento.value == ''){
			cont++
			elemento.style.border = "2px solid red";
			
		}
	}
	

		if(validarCedula()  == true){
			cont++
		}else {
			return false;
		}
		
		if(validarSoloLetras1()  == true){
			cont++
		}else {
			return false;
		}
			
			
		if(validarSoloLetras()  == true){
			cont++
		}else {
			return false;
		}
		
		if(validarSoloNumero()  == true){
			cont++
		}else {
			return false;
		}
		if(validarCorreo()  == true){
			cont++
		}else {
			return false;
		}
		//alert (cont)
		if (cont == 5){
			return true; 
		}else{return false }
		
		
		return false;
	
	
}


function validarCedula(){
	
		var numero = document.getElementById('cedula').value.trim();
        var total = 0;
        var longitud = numero.length;
        var checkLongitud = longitud - 1;
		
		

        if (numero != '' && longitud == 10){
          for(var i = 0; i < checkLongitud; i++){
			  
            if (i%2 == 0) {
				
              var aux = numero.charAt(i) * 2;
			   
              if (aux > 9)
				aux -= 9;
				total += aux;
				
            } else {
              total += parseInt(numero.charAt(i));
            
			}
          }

          total = total % 10 ? 10 - total % 10 : 0;
		  
          if (numero.charAt(longitud-1) == total) {
			
            document.getElementById('salida').innerHTML = 'Cedula Válida';
			return true;
          }else{
			
            document.getElementById('salida').innerHTML = 'Cedula Inválida';
			return false;
          }
        }else{
			document.getElementById('salida').innerHTML = 'debe ingresar 10 numeros ';
			return false;
			
		  }

	
}

function validarSoloLetras(){

	var valor = document.getElementById('nombre').value.trim();



        for (var i = 0; i < valor.length; i++) {


            var texto = valor[i] / valor[i];

            if (texto == 1) {
                document.getElementById('salida1').innerHTML = 'no ingrese numeros';
                return false;
                breack;
            } else if (valor.length < 3) {
                document.getElementById('salida1').innerHTML = 'nombre incorrecto';
                return false;
                breack;
            }
            else {
                document.getElementById('salida1').innerHTML = 'Nombre correcto';
                return true;
            }
        }
    }




function validarSoloLetras1(){
	
	var valor = document.getElementById('apellido').value.trim();




        for (var i = 0; i < valor.length; i++) {


            var texto = valor[i] / valor[i];

            if (texto == 1) {
                document.getElementById('salida2').innerHTML = 'no ingrese numeros';
                return false;
                breack;
            } else if (valor.length < 3) {
                document.getElementById('salida2').innerHTML = 'Apellido incorrecto';
                return false;
                breack;
            }
            else {
                document.getElementById('salida2').innerHTML = 'Apellido correcto';
                return true;
            }
        }

	
}

function validarSoloNumero(){
	
	var valor = document.getElementById('telefono').value;
	var texto = valor / valor;
	
	if (texto == 1 && valor.length == 10  ){
		document.getElementById('salida3').innerHTML = 'Numero correcto';
		return true;
		
		
	}else {
		document.getElementById('salida3').innerHTML = 'Numero incorrecto';
		return false;
	}
	
}

function validarCorreo(){
	var cadena = document.getElementById('correo').value;
	var cont = 0;
	for(var i = 0; i < cadena.length; i++){
		if(cadena[i] == '@'){
			cont++;
					}
		
		if (cadena[i] == '.' && cont == 1){
			if(cadena[i+1] == 'c'){
				document.getElementById('salida4').innerHTML = 'Correo invalido';
				return true;
			}else{
				
				document.getElementById('salida4').innerHTML = 'CORREO VALIDO';
				return false;
			}
		}
		
	}
	
	document.getElementById('salida4').innerHTML = 'Verificar correo2';
	return false;
}

