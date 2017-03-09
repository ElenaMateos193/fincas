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

	private int portalPropiedad;
	
	private int plantaPropiedad;
	
	private char letraPropiedad;
	
	@ManyToOne
	private Propietario propietarioPropiedad;
	
	@ManyToOne
	private ComunidadDeVecinos comunidadPropiedad;

	public Propiedad(int portalPropiedad, int plantaPropiedad, char letraPropiedad, Propietario propietarioPropiedad,
			ComunidadDeVecinos comunidadPropiedad) {
		super();
		this.portalPropiedad = portalPropiedad;
		this.plantaPropiedad = plantaPropiedad;
		this.letraPropiedad = letraPropiedad;
		this.propietarioPropiedad = propietarioPropiedad;
		this.comunidadPropiedad = comunidadPropiedad;
	}

	public int getPortalPropiedad() {
		return portalPropiedad;
	}

	public void setPortalPropiedad(int portalPropiedad) {
		this.portalPropiedad = portalPropiedad;
	}

	public int getPlantaPropiedad() {
		return plantaPropiedad;
	}

	public void setPlantaPropiedad(int plantaPropiedad) {
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
