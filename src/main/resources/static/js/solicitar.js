$(document).ready(function() {
	
});


async function solicitarTurno(){
	//creamos una variable de tipo array que contenga los datos
	let datos={};
	//capturamos los datos con el id de los inputs
	datos.nombre=document.getElementById('especialidad').value;	
	datos.nombre=document.getElementById('profesional').value;	
	datos.apellido=document.getElementById('dia').value;
	datos.email=document.getElementById('hora').value;
	}
	
  const request = await fetch('api/turnos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(datos)
  });
  window.location.href="misturnos.html";

  alert("Turno creado con exito");
  window.location.href="misturnos.html";