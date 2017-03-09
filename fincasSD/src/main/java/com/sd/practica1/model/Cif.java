package com.sd.practica1.model;

public class Cif {
	
	private final char h ='H';
	private int numeros;
	
	public Cif(int numbers) {
		this.numeros = numbers;
	}

	public int getNumbers() {
		return numeros;
	}

	public void setNumbers(int numbers) {
		this.numeros = numbers;
	}
	
}
