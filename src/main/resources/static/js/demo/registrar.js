$(document).ready(function() {
	

  
});

async function registrarUsuarios(){
	
  const request = await fetch('api/usuarios', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
  const usuarios = await request.json();
  
  let listadoHTML='';
}