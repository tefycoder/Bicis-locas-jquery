function validateForm(){
	var nombre = document.getElementById("name").value;
    	if(nombre == ""){
			var hermano = document.getElementById("name"); 
			var texto = document.createTextNode("Debe ingresar su nombre");
			mensaje(hermano,texto);
		}
		
    var apellido = document.getElementById("lastname").value;
       if(apellido == "") {
          var hermano = document.getElementById("lastname");
          var texto = document.createTextNode("Debe ingresar su apellido");
          mensaje(hermano,texto);
        }
    
    if (apellido.charAt(0) == apellido.charAt(0).toLowerCase() || nombre.charAt(0) == nombre.charAt(0).toLowerCase())
    	alert("La primera letra debe ser Mayuscula");
	else
		return true;

    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(email) ){
        var hermano = document.getElementById("input-email");
        var texto = document.createTextNode("Verifique su email");
        mensaje(hermano, texto);
    }

	var contra = document.getElementById("input-password").value;
		if(contra.length < 5 ){
			var hermano = document.getElementById("input-password");
			var texto = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
			mensaje(hermano, texto);
		}else if(contra == "123456" || contra =="password" || contra == "098754"){
			alert("Por favor escriba otra contraseña");
		}

	if (document.getElementsByTagName("select")[0].value == 0){
		var hermano = document.getElementsByTagName("select")[0];
		var texto = document.createTextNode("Debes seleccionar al menos un tipo de bici");
		mensaje(hermano, texto);
		
	}
}
function mensaje (hermano, texto){
	var mensajeNegro = document.createElement("span");
	var padreMensaje = hermano.parentNode;

	padreMensaje.insertBefore(mensajeNegro,hermano);

	mensajeNegro.appendChild(texto);
	return mensajeNegro;
}



