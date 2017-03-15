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
	
	private String apellidosPropietarios;
	
	private String dniPropietario;
	
	@OneToOne(mappedBy="propietarioDireccion")
	private Direccion direccionPropietario;
	
	private int telefonoPropietario;
	
	private double porcentajeParticipacionPropietario;
	
	private int numeroCuentaPropietario;
	
	@OneToMany(mappedBy="propietarioPropiedad")
	private List<Propiedad> propiedadesPropietario = new ArrayList<>();

	public Propietario(String nombrePropietario, String apellidosPropietarios, String dniPropietario,
			Direccion direccionPropietario, int telefonoPropietario, double porcentajeParticipacionPropietario,
			int numeroCuentaPropietario, List<Propiedad> propiedadesPropietario) {
		super();
		this.nombrePropietario = nombrePropietario;
		this.apellidosPropietarios = apellidosPropietarios;
		this.dniPropietario = dniPropietario;
		this.direccionPropietario = direccionPropietario;
		this.telefonoPropietario = telefonoPropietario;
		this.porcentajeParticipacionPropietario = porcentajeParticipacionPropietario;
		this.numeroCuentaPropietario = numeroCuentaPropietario;
		this.propiedadesPropietario = propiedadesPropietario;
	}

	public String getNombrePropietario() {
		return nombrePropietario;
	}

	public void setNombrePropietario(String nombrePropietario) {
		this.nombrePropietario = nombrePropietario;
	}

	public String getApellidosPropietarios() {
		return apellidosPropietarios;
	}

	public void setApellidosPropietarios(String apellidosPropietarios) {
		this.apellidosPropietarios = apellidosPropietarios;
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

	public int getNumeroCuentaPropietario() {
		return numeroCuentaPropietario;
	}

	public void setNumeroCuentaPropietario(int numeroCuentaPropietario) {
		this.numeroCuentaPropietario = numeroCuentaPropietario;
	}

	public List<Propiedad> getPropiedadesPropietario() {
		return propiedadesPropietario;
	}

	public void setPropiedadesPropietario(List<Propiedad> propiedadesPropietario) {
		this.propiedadesPropietario = propiedadesPropietario;
	}
	
	
	
}
