package com.cooweb.dao;

import jakarta.transaction.Transactional;
import java.util.List;

import com.cooweb.models.Turnos;
import com.cooweb.models.Usuario;

@Transactional
public interface TurnosDAO {
	List<Turnos> getTurnos();
	void eliminarTurno(Long id_turnos);
	void solicitarTurno(Turnos turno);	
	
}

