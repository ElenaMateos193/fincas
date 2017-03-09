package com.sd.practica1.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
	
	private List<Propiedad> propiedadComunidadVecinos = new ArrayList<>();
	
}
