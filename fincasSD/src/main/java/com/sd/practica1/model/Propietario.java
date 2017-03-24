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
public class Propietario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	
	private String nombrePropietario;
	
	private String apellidosPropietario;
	
	private String dniPropietario;
	
	@OneToOne(mappedBy="propietarioDireccion")
	private Direccion direccionPropietario;
	
	private int telefonoPropietario;
	
	private double porcentajeParticipacionPropietario;
	
	private String numeroCuentaPropietario;
	
	@OneToMany(mappedBy="propietarioPropiedad")
	private List<Propiedad> propiedadesPropietario = new ArrayList<>();

	
	
	public Propietario() {
	}

	public Propietario(String nombrePropietario, String apellidosPropietarios, String dniPropietario, int telefonoPropietario, double porcentajeParticipacionPropietario,
			String numeroCuentaPropietario) {
		this.nombrePropietario = nombrePropietario;
		this.apellidosPropietario = apellidosPropietarios;
		this.dniPropietario = dniPropietario;
		this.telefonoPropietario = telefonoPropietario;
		this.porcentajeParticipacionPropietario = porcentajeParticipacionPropietario;
		this.numeroCuentaPropietario = numeroCuentaPropietario;
		this.propiedadesPropietario = new ArrayList();
	}

	public String getNombrePropietario() {
		return nombrePropietario;
	}

	public void setNombrePropietario(String nombrePropietario) {
		this.nombrePropietario = nombrePropietario;
	}

	public String getApellidosPropietarios() {
		return apellidosPropietario;
	}

	public void setApellidosPropietarios(String apellidosPropietarios) {
		this.apellidosPropietario = apellidosPropietarios;
	}

	public String getDniPropietario() {
		return dniPropietario;
	}

	public void setDniPropietario(String dniPropietario) {
		this.dniPropietario = dniPropietario;
	}

	public Direccion getDireccionPropietario() {
		return direccionPropietario;
	}

	public void setDireccionPropietario(Direccion direccionPropietario) {
		this.direccionPropietario = direccionPropietario;
	}

	public int getTelefonoPropietario() {
		return telefonoPropietario;
	}

	public void setTelefonoPropietario(int telefonoPropietario) {
		this.telefonoPropietario = telefonoPropietario;
	}

	public double getPorcentajeParticipacionPropietario() {
		return porcentajeParticipacionPropietario;
	}

	public void setPorcentajeParticipacionPropietario(double porcentajeParticipacionPropietario) {
		this.porcentajeParticipacionPropietario = porcentajeParticipacionPropietario;
	}

	public String getNumeroCuentaPropietario() {
		return numeroCuentaPropietario;
	}

	public void setNumeroCuentaPropietario(String numeroCuentaPropietario) {
		this.numeroCuentaPropietario = numeroCuentaPropietario;
	}

	public List<Propiedad> getPropiedadesPropietario() {
		return propiedadesPropietario;
	}

	public void setPropiedadesPropietario(List<Propiedad> propiedadesPropietario) {
		this.propiedadesPropietario = propiedadesPropietario;
	}
	
	public void addPropiedad(Propiedad p){
		propiedadesPropietario.add(p);
	}
	
}
