// Call the dataTables jQuery plugin
$(document).ready(function() {
	
	getTurnos();
 	$('#turnos').DataTable();
  
});

async function getTurnos(){

  const request = await fetch('api/getturnos', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const turnos = await request.json();
  
  let listadoHTML='';
  
  for(let turno of turnos){
	
	let botonEliminar='<a href=¨#¨ onclick="eliminarTurno('+turno.id_turnos +')" class=¨btn btn-danger btn-circle btn-sm¨><i class="fas fa-trash"></i> </a>';
	let turnoHtml='<tr><td>'+ turno.id_turnos +'</td><td>' +  turno.especialidad + '</td><td>'
		+ turno.profesional + '</td><td>' + turno.fecha + '</td><td>' + turno.hora + '</td><td>' +botonEliminar + '</td></tr>';
		
	listadoHTML+=turnoHtml;
  }

	document.querySelector('#turnos tbody').outerHTML=listadoHTML
}



async function eliminarTurno(id_turnos){
	//alert(id);
	
	if(!confirm('Desea eliminar turno?')){
		return;
	}
	
	
	const request= await fetch('api/turnos/'+id_turnos, {
		method: 'DELETE',
		headers: {
			'Accept':'application/json',
			'Content-Type': 'application/json'
		},
	});
	
	location.reload();
}
