package com.sd.practica1.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class ComunidadDeVecinos {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	
	private Cif cifComunidadVecinos;
	
	private String calleComunidadVecinos;
	
	private int numeroComunidadVecinos;
	
	private int cpComunidadVecinos;
	
	private int numeroCuentaComunidadVecinos;
	
	@OneToMany(mappedBy="comunidadPropiedad")
	private List<Propiedad> propiedadComunidadVecinos = new ArrayList<>();

	public ComunidadDeVecinos(Cif cifComunidadVecinos, String calleComunidadVecinos, int numeroComunidadVecinos,
			int cpComunidadVecinos, int numeroCuentaComunidadVecinos, List<Propiedad> propiedadComunidadVecinos) {
		super();
		this.cifComunidadVecinos = cifComunidadVecinos;
		this.calleComunidadVecinos = calleComunidadVecinos;
		this.numeroComunidadVecinos = numeroComunidadVecinos;
		this.cpComunidadVecinos = cpComunidadVecinos;
		this.numeroCuentaComunidadVecinos = numeroCuentaComunidadVecinos;
		this.propiedadComunidadVecinos = propiedadComunidadVecinos;
	}

	public Cif getCifComunidadVecinos() {
		return cifComunidadVecinos;
	}

	public void setCifComunidadVecinos(Cif cifComunidadVecinos) {
		this.cifComunidadVecinos = cifComunidadVecinos;
	}

	public String getCalleComunidadVecinos() {
		return calleComunidadVecinos;
	}

	public void setCalleComunidadVecinos(String calleComunidadVecinos) {
		this.calleComunidadVecinos = calleComunidadVecinos;
	}

	public int getNumeroComunidadVecinos() {
		return numeroComunidadVecinos;
	}

	public void setNumeroComunidadVecinos(int numeroComunidadVecinos) {
		this.numeroComunidadVecinos = numeroComunidadVecinos;
	}

	public int getCpComunidadVecinos() {
		return cpComunidadVecinos;
	}

	public void setCpComunidadVecinos(int cpComunidadVecinos) {
		this.cpComunidadVecinos = cpComunidadVecinos;
	}

	public int getNumeroCuentaComunidadVecinos() {
		return numeroCuentaComunidadVecinos;
	}

	public void setNumeroCuentaComunidadVecinos(int numeroCuentaComunidadVecinos) {
		this.numeroCuentaComunidadVecinos = numeroCuentaComunidadVecinos;
	}

	public List<Propiedad> getPropiedadComunidadVecinos() {
		return propiedadComunidadVecinos;
	}

	public void setPropiedadComunidadVecinos(List<Propiedad> propiedadComunidadVecinos) {
		this.propiedadComunidadVecinos = propiedadComunidadVecinos;
	}
	
	
	
}
