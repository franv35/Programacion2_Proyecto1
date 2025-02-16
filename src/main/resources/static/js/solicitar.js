async function solicitarTurno(){
	//creamos una variable de tipo array que contenga los datos
	let datos={};
	//capturamos los datos con el id de los inputs
	datos.especialidad=document.getElementById('especialidad').value;	
	datos.profesional=document.getElementById('profesional').value;	
	datos.dia=document.getElementById('dia').value;
	datos.hora=document.getElementById('hora').value;
	
	console.log(datos);
	
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
}