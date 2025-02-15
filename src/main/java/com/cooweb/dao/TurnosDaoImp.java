package com.cooweb.dao;

import org.springframework.stereotype.Repository;

import com.cooweb.models.Turnos;
import com.cooweb.models.Usuario;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import java.util.List;



@Repository
@Transactional
public class TurnosDaoImp implements TurnosDAO{
	@PersistenceContext
	private EntityManager entityManager;
	@Override
	public List<Turnos> getTurnos(){
		String query="from Turnos";
		List<Turnos> resultado= entityManager.createQuery(query).getResultList();
		return resultado;
	}
	@Override
	public void eliminarTurno(Long id_turnos) {
		Turnos turno=entityManager.find(Turnos.class, id_turnos);
		entityManager.remove(turno);
	}
	@Override
	public void solicitarTurno(Turnos turno) {
		entityManager.merge(turno);
		
	}


}
