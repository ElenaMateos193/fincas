package com.sd.practica1.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Propiedad {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;

	private String portalPropiedad;
	
	private String plantaPropiedad;
	
	private char letraPropiedad;
	
	@ManyToOne
	private Propietario propietarioPropiedad;
	
	@ManyToOne
	private ComunidadDeVecinos comunidadPropiedad;

	
	
	public Propiedad() {
	}

	public Propiedad(String portalPropiedad, String plantaPropiedad, char letraPropiedad) {
		this.portalPropiedad = portalPropiedad;
		this.plantaPropiedad = plantaPropiedad;
		this.letraPropiedad = letraPropiedad;
	}

	public String getPortalPropiedad() {
		return portalPropiedad;
	}

	public void setPortalPropiedad(String portalPropiedad) {
		this.portalPropiedad = portalPropiedad;
	}

	public String getPlantaPropiedad() {
		return plantaPropiedad;
	}

	public void setPlantaPropiedad(String plantaPropiedad) {
		this.plantaPropiedad = plantaPropiedad;
	}

	public char getLetraPropiedad() {
		return letraPropiedad;
	}

	public void setLetraPropiedad(char letraPropiedad) {
		this.letraPropiedad = letraPropiedad;
	}

	public Propietario getPropietarioPropiedad() {
		return propietarioPropiedad;
	}

	public void setPropietarioPropiedad(Propietario propietarioPropiedad) {
		this.propietarioPropiedad = propietarioPropiedad;
	}

	public ComunidadDeVecinos getComunidadPropiedad() {
		return comunidadPropiedad;
	}

	public void setComunidadPropiedad(ComunidadDeVecinos comunidadPropiedad) {
		this.comunidadPropiedad = comunidadPropiedad;
	}
	
}
