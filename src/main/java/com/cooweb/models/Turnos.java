package com.cooweb.models;

import java.sql.Time;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="turnos")
public class Turnos {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_turnos")
	private Long id_turnos;
	
	
	@Column(name="especialidad")
	private String especialidad;
	
	@Column(name="profesional")
	private String profesional;
	
	@Column(name="fecha")
    private Date fecha;
	
	@Column(name="hora")
    private Time hora;
	
	
	
	//Constructor
	public Turnos() {
	}
	
	public Turnos(Long id_turnos, String nombreUsuario, String especialidad, String profesional, Date fecha, Time hora,
			Usuario usuario) {
		super();
		this.id_turnos = id_turnos;
		this.especialidad = especialidad;
		this.profesional = profesional;
		this.fecha = fecha;
		this.hora = hora;
	}

	
	//Getters y Setters
	public Long getIdTurnos() {
		return id_turnos;
	}

	public void setIdTurnos(Long idTurnos) {
		this.id_turnos = idTurnos;
	}


	public String getEspecialidad() {
		return especialidad;
	}

	public void setEspecialidad(String especialidad) {
		this.especialidad = especialidad;
	}

	public String getProfesional() {
		return profesional;
	}

	public void setProfesional(String profesional) {
		this.profesional = profesional;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public Time getHora() {
		return hora;
	}

	public void setHora(Time hora) {
		this.hora = hora;
	}


	
	
	
}