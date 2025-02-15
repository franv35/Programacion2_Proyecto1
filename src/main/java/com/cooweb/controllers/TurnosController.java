package com.cooweb.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.cooweb.dao.TurnosDAO;
import com.cooweb.models.Turnos;
import com.cooweb.models.Usuario;

@RestController
public class TurnosController {
	@Autowired
	private TurnosDAO turnosDao;
	
	@RequestMapping(value="api/getturnos")
	public List<Turnos> getTurnos(){
		List<Turnos> turno=turnosDao.getTurnos();
		return turno;
	}
	
	@RequestMapping(value="api/turnos/{id}", method=RequestMethod.DELETE)
	public void eliminar(@PathVariable Long id_turnos){
		turnosDao.eliminarTurno(id_turnos);
	}
	
	@RequestMapping(value="api/turnos", method=RequestMethod.POST)
	public void solicitarTurno(@RequestBody Turnos turno){
		turnosDao.solicitarTurno(turno);
	}
	
	
}