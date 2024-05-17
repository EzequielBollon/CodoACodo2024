window.onload = function() {
	
	let borrar = document.getElementById('borrar');
	borrar.addEventListener("click", borrando);
	
	let nombre = document.getElementById('nombre');
	nombre.addEventListener("input", campoNombre);
		
	let apellido = document.getElementById('apellido');
	apellido.addEventListener("input", campoApellido);

	let telefono = document.getElementById('telefono');
	telefono.addEventListener("input", campoTelefono);

	let email = document.getElementById('email');
	email.addEventListener("input", campoEMail);

	let mensaje = document.getElementById('mensaje');
	mensaje.addEventListener("input", campoMensaje);
	
}

function campoNombre() {
	let cNombre = document.getElementById('nombre').value;
	
	if (cNombre) {
		document.getElementById('nombre_error').innerHTML = " ";
		document.getElementById('nombre').style.outline = "0.5px solid #000";
	}
}

function campoApellido() {
	let cApellido = document.getElementById('apellido').value;
	
	if (cApellido) {
		document.getElementById('apellido_error').innerHTML = " ";
		document.getElementById('apellido').style.outline = "0.5px solid #000";
	}
}	

function campoTelefono() {
	let cTelefono = document.getElementById('telefono').value;
	
	if (cTelefono) {
		document.getElementById('telefono_error').innerHTML = " ";
		document.getElementById('telefono').style.outline = "0.5px solid #000";
	}
}

function campoEMail() {
	let cEMail = document.getElementById('email').value;
	
	if (cEMail) {
		document.getElementById('email_error').innerHTML = " ";
		document.getElementById('email').style.outline = "0.5px solid #000";
	}
}

function campoMensaje() {
	let cMensaje = document.getElementById('mensaje').value;
	
	if (cMensaje) {
		document.getElementById('mensaje_error').innerHTML = " ";
		document.getElementById('mensaje').style.outline = "0.5px solid #000";
	}
}

function borrando() {
	document.location.reload(true);
}

function contactos() {
	let expNomape = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;
	let expTelefono = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
	let expEMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let cNombre = document.getElementById('nombre').value;
	let cApellido = document.getElementById('apellido').value;
	let cTelefono = document.getElementById('telefono').value;	
	let cEMail = document.getElementById('email').value;
	let cMensaje = document.getElementById('mensaje').value;
	let nombreError = document.getElementById('nombre_error');
	let apellidoError = document.getElementById('apellido_error');
	let telefonoError = document.getElementById('telefono_error');
	let emailError = document.getElementById('email_error');
	let mensajeError = document.getElementById('mensaje_error');
	let campoNombre = document.getElementById('nombre');
	let campoApellido = document.getElementById('apellido');	
	let campoEMail = document.getElementById('email');
	let campoTelefono = document.getElementById('telefono');
	let campoMensaje = document.getElementById('mensaje');
	
	if (!cNombre) {
		let mensajeErrorNombre = "Por favor, ingresa tu Nombre";
		nombreError.innerHTML = mensajeErrorNombre;
		campoNombre.style.outline = "1px solid #f00";
		return false;
	} else if (!expNomape.test(cNombre)) {
		let mensajeInvalidoNombre = "El Nombre ingresado no es válido!";
		nombreError.innerHTML = mensajeInvalidoNombre;
		campoNombre.style.outline = "1px solid #f00";
		return false;
	}

	if (!cApellido) {
		let mensajeErrorApellido = "Por favor, ingresa tu Apellido";
		apellidoError.innerHTML = mensajeErrorApellido;
		campoApellido.style.outline = "1px solid #f00";
		return false;
	} else if (!expNomape.test(cApellido)) {
		let mensajeInvalidoApellido = "El Apellido ingresado no es válido!";
		apellidoError.innerHTML = mensajeInvalidoApellido;
		campoApellido.style.outline = "1px solid #f00";
		return false;
	}
	
	if (!cTelefono) {
		let mensajeErrorTelefono = "Por favor, ingresa tu Telefono";
		telefonoError.innerHTML = mensajeErrorTelefono;
		campoTelefono.style.outline = "1px solid #f00";
		return false;
	} else if (!expTelefono.test(cTelefono)) {
		let mensajeInvalidoTelefono = "El Telefono ingresado no es válido";
		telefonoError.innerHTML = mensajeInvalidoTelefono;
		campoTelefono.style.outline = "1px solid #f00";
		return false;
	}
	
	if (!cEMail) {
		let mensajeErrorEMail = "Por favor, ingresa tu Mail";
		emailError.innerHTML = mensajeErrorEMail;
		campoEMail.style.outline = "1px solid #f00";
		return false;
	} else if (!expEMail.test(cEMail)) {
		let mensajeInvalidoEMail = "El Mail ingresado no es válido";
		emailError.innerHTML = mensajeInvalidoEMail;
		campoEMail.style.outline = "1px solid #f00";
		return false;
	}

	let checkboxes = document.getElementsByName('contacto');
	let checkselect = false;
  
	for (let i=0, n=checkboxes.length; i<n; i++) {
	  if (checkboxes[i].checked) {
		checkselect = true;
		break;
	  }
	}

	if (!checkselect) {
		document.getElementById('check_error').innerHTML = "Por favor, selecciona medios de contacto";
        setTimeout(function(){
                document.getElementById('check_error').style.display = "none";
              }, 3000);
		return false;	 
	} 

	let select = document.getElementById('horario');
	let opcion = select.value;
  
	if (opcion == 'elegir') {
		document.getElementById('select_error').innerHTML = "Por favor, selecciona una opción";
        setTimeout(function(){
			document.getElementById('select_error').style.display = "none";
		  }, 3000);
	    return false;	  
	}

	let radios = document.getElementsByName('motivo');
	let radioselect = false;
  
	for (let i=0, n=radios.length; i<n; i++) {
	  if (radios[i].checked) {
		radioselect = true;
		document.getElementById('radio_error').innerHTML = " ";
		break;
	  }
	}

	if (!radioselect) {
		document.getElementById('radio_error').innerHTML = "Selecciona el motivo del contacto";
        setTimeout(function(){
			document.getElementById('radio_error').style.display = "none";
		  }, 3000);
		  return false;	 	  
	} 
	
	if (!cMensaje) {
		let mensajeErrorMensaje = "Por favor, ingresa el detalle de tu consulta";
		mensajeError.innerHTML = mensajeErrorMensaje;
		campoMensaje.style.outline = "1px solid #f00";
		return false;
	} else if (cMensaje.length >= 255) {
		mensajeLargo = "Tu Mensaje es demasiado Largo";
		mensajeError.innerHTML = mensajeLargo;
		campoMensaje.style.outline = "1px solid #f00";
		return false;
	}
  }
