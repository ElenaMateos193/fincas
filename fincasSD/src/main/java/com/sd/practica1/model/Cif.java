package com.sd.practica1.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Cif {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	private final char h ='H';
	private String numerosCif;
	@OneToOne
	private ComunidadDeVecinos comunidadCif;
	
	public Cif(){
		
	}
	
	public Cif(String numbers) {
		this.numerosCif = numbers;
	}

	public String getNumbers() {
		return numerosCif;
	}

	public void setNumbers(String numbers) {
		this.numerosCif = numbers;
	}
	
	public char getH(){
		return h;
	}

	public ComunidadDeVecinos getComunidadCif() {
		return comunidadCif;
	}

	public void setComunidadCif(ComunidadDeVecinos comunidadCif) {
		this.comunidadCif = comunidadCif;
	}
	
	
	
}
