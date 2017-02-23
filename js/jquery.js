$( document ).ready(function() {
    $( ".validador" ).click(function() {
    	validator();
    });
    function validator (){
    	var nombre = $("#name");
    	var apellido = $("#lastname");
    	var email = $("#input-email");
    	var pass = $("#input-password");
    	var t_bici = $(".selectbici");
    	var i_social = $("#input-social");

    	$('span').remove();

    	if(nombre.val() == ""){
    		mensaje(nombre.parent(),"<span>Debe ingresar su nombre</span>");
    	}
    	else{
    		if(nombre.val()[0] == nombre.val()[0].toLowerCase()){
    			mensaje(nombre.parent(),"<span>La primera letra debe ser Mayuscula</span>");
    		}
    	}

    	if(apellido.val() == ""){
    		mensaje(apellido.parent(),"<span>Debe ingresar su apellido</span>");
    	}
    	else{
    		if(apellido.val()[0] == apellido.val()[0].toLowerCase()){
    			mensaje(apellido.parent(),"<span>La primera letra debe ser Mayuscula</span>");
    		}
    	}


    	if(email.val() == ""){
    		mensaje(email.parent(),"<span>Debe ingresar su email</span>");
    	}
    	else{
    		var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		    if ( !expr.test(email.val()) ){
		   		mensaje(email.parent(),"<span>Debe ingresar un email valido</span>");
		    }
    	}
    	if(pass.val() == ""){
    		mensaje(pass.parent(),"<span>Debe ingresar su password</span>");
    	}else{
    		if(pass.val().length < 5 ){
    			mensaje(pass.parent(),"<span>La contraseña debe tener al menos 6 caracteres </span>");
			}else if(pass.val() == "123456" || pass.val() =="password" || pass.val() == "098754"){
				mensaje(pass.parent(),"<span>Por favor escriba otra contraseña</span>");
			}
    	}
    	if(t_bici.val() == "0"){
    		mensaje(t_bici.parent(),"<span>Debe seleccionar un tipo</span>");
    	}
    	
    
    }
    function mensaje (padre, texto){
		padre.append(texto);
	}
});