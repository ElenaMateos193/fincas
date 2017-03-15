package com.sd.practica1.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Direccion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	
	private String calleDireccion;
	
	private int portalDireccion;
	
	private int numeroDireccion;
	
	private int plantaDireccion;
	
	private char letraDireccion;
	
	@OneToOne
	private Propietario propietarioDireccion;

	public Direccion(String calleDireccion, int portalDireccion, int numeroDireccion, int plantaDireccion,
			char letraDireccion) {
		super();
		this.calleDireccion = calleDireccion;
		this.portalDireccion = portalDireccion;
		this.numeroDireccion = numeroDireccion;
		this.plantaDireccion = plantaDireccion;
		this.letraDireccion = letraDireccion;
	}

	public String getCalleDireccion() {
		return calleDireccion;
	}

	public void setCalleDireccion(String calleDireccion) {
		this.calleDireccion = calleDireccion;
	}

	public int getPortalDireccion() {
		return portalDireccion;
	}

	public void setPortalDireccion(int portalDireccion) {
		this.portalDireccion = portalDireccion;
	}

	public int getNumeroDireccion() {
		return numeroDireccion;
	}

	public void setNumeroDireccion(int numeroDireccion) {
		this.numeroDireccion = numeroDireccion;
	}

	public int getPlantaDireccion() {
		return plantaDireccion;
	}

	public void setPlantaDireccion(int plantaDireccion) {
		this.plantaDireccion = plantaDireccion;
	}

	public char getLetraDireccion() {
		return letraDireccion;
	}

	public void setLetraDireccion(char letraDireccion) {
		this.letraDireccion = letraDireccion;
	}
	
	
	
}
