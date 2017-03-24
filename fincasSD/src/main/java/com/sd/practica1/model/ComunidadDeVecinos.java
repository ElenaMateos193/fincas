package com.sd.practica1.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class ComunidadDeVecinos {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	
	@OneToOne(mappedBy="comunidadCif")
	private Cif cifComunidadVecinos;
	
	private String calleComunidadVecinos;
	
	private int numeroComunidadVecinos;
	
	private String poblacionComunidadVecinos;
	
	private int cpComunidadVecinos;
	
	private String numeroCuentaComunidadVecinos;
	
	@OneToMany(mappedBy="comunidadPropiedad")
	private List<Propiedad> propiedadComunidadVecinos = new ArrayList<>();

	public ComunidadDeVecinos(){
		
	}
	
	public ComunidadDeVecinos(String calleComunidadVecinos, int numeroComunidadVecinos,
			int cpComunidadVecinos, String numeroCuentaComunidadVecinos, String poblacionComunidadVecinos) {
		this.calleComunidadVecinos = calleComunidadVecinos;
		this.numeroComunidadVecinos = numeroComunidadVecinos;
		this.cpComunidadVecinos = cpComunidadVecinos;
		this.numeroCuentaComunidadVecinos = numeroCuentaComunidadVecinos;
		this.setPoblacionComunidadVecinos(poblacionComunidadVecinos);
		propiedadComunidadVecinos= new ArrayList();
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

	public String getNumeroCuentaComunidadVecinos() {
		return numeroCuentaComunidadVecinos;
	}

	public void setNumeroCuentaComunidadVecinos(String numeroCuentaComunidadVecinos) {
		this.numeroCuentaComunidadVecinos = numeroCuentaComunidadVecinos;
	}

	public List<Propiedad> getPropiedadComunidadVecinos() {
		return propiedadComunidadVecinos;
	}

	public void setPropiedadComunidadVecinos(List<Propiedad> propiedadComunidadVecinos) {
		this.propiedadComunidadVecinos = propiedadComunidadVecinos;
	}
	
	public void addPropiedad(Propiedad p){
		propiedadComunidadVecinos.add(p);
	}

	public String getPoblacionComunidadVecinos() {
		return poblacionComunidadVecinos;
	}

	public void setPoblacionComunidadVecinos(String poblacionComunidadVecinos) {
		this.poblacionComunidadVecinos = poblacionComunidadVecinos;
	}
	
}
